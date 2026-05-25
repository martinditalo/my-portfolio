import { KeyboardEvent, ReactNode, useState } from "react";
import axios from "axios";
import "./ChatBot.scss";

interface ChatMessage {
  sender: "user" | "bot";
  text: string;
}

const CHATBOT_API_URL =
  "https://my-portfolio-ai-backend-production.up.railway.app";

const initialMessages: ChatMessage[] = [
  {
    sender: "bot",
    text: "Hi! I’m Martin assistant. Ask me about his projects, experience, or skills.",
  },
];

const renderInlineMarkdown = (text: string): ReactNode[] => {
  const segments = text.split(
    /(\*\*.*?\*\*|\*.*?\*|__.*?__|_.*?_\[[^\]]+\]\([^)]*\)|\[[^\]]+\]\([^)]*\)|https?:\/\/\S+)/g,
  );

  return segments.filter(Boolean).map((segment, index) => {
    if (/^\*\*(.*?)\*\*$/.test(segment)) {
      return (
        <strong key={`${segment}-${index}`}>{segment.slice(2, -2)}</strong>
      );
    }

    if (/^\*(.*?)\*$/.test(segment)) {
      return <em key={`${segment}-${index}`}>{segment.slice(1, -1)}</em>;
    }

    if (/^__(.*?)__$/.test(segment)) {
      return (
        <strong key={`${segment}-${index}`}>{segment.slice(2, -2)}</strong>
      );
    }

    if (/^_(.*?)_$/.test(segment)) {
      return <em key={`${segment}-${index}`}>{segment.slice(1, -1)}</em>;
    }

    if (/^\[([^\]]+)\]\(([^)]+)\)$/.test(segment)) {
      const match = segment.match(/^\[([^\]]+)\]\(([^)]+)\)$/);

      if (match) {
        return (
          <a
            key={`${segment}-${index}`}
            href={match[2]}
            target="_blank"
            rel="noreferrer"
            className="chatbot-link"
          >
            {match[1]}
          </a>
        );
      }
    }

    if (/^https?:\/\//.test(segment)) {
      return (
        <a
          key={`${segment}-${index}`}
          href={segment}
          target="_blank"
          rel="noreferrer"
          className="chatbot-link"
        >
          {segment}
        </a>
      );
    }

    return <span key={`${segment}-${index}`}>{segment}</span>;
  });
};

const renderStructuredContent = (text: string): ReactNode => {
  const lines = text.split(/\r?\n/);
  const content: ReactNode[] = [];
  const listItems: ReactNode[] = [];

  const pushList = () => {
    if (!listItems.length) {
      return;
    }

    content.push(
      <ul key={`list-${content.length}`} className="chatbot-list">
        {[...listItems]}
      </ul>,
    );

    listItems.length = 0;
  };

  const pushParagraph = (paragraph: string) => {
    if (!paragraph.trim()) {
      return;
    }

    content.push(
      <p key={`paragraph-${content.length}`} className="chatbot-paragraph">
        {renderInlineMarkdown(paragraph.trim())}
      </p>,
    );
  };

  lines.forEach((rawLine) => {
    const line = rawLine.trim();

    if (!line) {
      pushList();
      return;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);

    if (headingMatch) {
      pushList();
      const level = headingMatch[1].length;
      const headingClass =
        level === 1
          ? "chatbot-heading chatbot-heading--primary"
          : "chatbot-heading chatbot-heading--secondary";

      const HeadingTag =
        `h${Math.min(level + 2, 6)}` as keyof JSX.IntrinsicElements;

      content.push(
        <HeadingTag key={`heading-${content.length}`} className={headingClass}>
          {renderInlineMarkdown(headingMatch[2])}
        </HeadingTag>,
      );
      return;
    }

    if (/^[-*]\s+/.test(line)) {
      listItems.push(
        <li key={`bullet-${listItems.length}`} className="chatbot-list__item">
          {renderInlineMarkdown(line.replace(/^[-*]\s+/, ""))}
        </li>,
      );
      return;
    }

    if (line.startsWith("> ")) {
      pushList();
      content.push(
        <blockquote
          key={`quote-${content.length}`}
          className="chatbot-blockquote"
        >
          {renderInlineMarkdown(line.slice(2))}
        </blockquote>,
      );
      return;
    }

    pushList();
    pushParagraph(line);
  });

  pushList();

  if (!content.length) {
    return <p className="chatbot-paragraph">{renderInlineMarkdown(text)}</p>;
  }

  return <>{content}</>;
};

const ChatBot = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [chat, setChat] = useState<ChatMessage[]>(initialMessages);
  const [isOpen, setIsOpen] = useState(false);

  const sendMessage = async () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage || loading) {
      return;
    }

    const userMessage: ChatMessage = {
      sender: "user",
      text: trimmedMessage,
    };

    setChat((prev) => [...prev, userMessage]);
    setMessage("");
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(`${CHATBOT_API_URL}/chat`, {
        message: trimmedMessage,
      });

      const reply =
        typeof response.data?.reply === "string" && response.data.reply.trim()
          ? response.data.reply
          : "I’m not sure how to respond right now. Please try another question.";

      setChat((prev) => [
        ...prev,
        {
          sender: "bot",
          text: reply,
        },
      ]);
    } catch {
      setError(
        "I couldn’t reach the Gemini backend right now. Please try again in a moment.",
      );
      setChat((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, I couldn’t connect to the assistant. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className={`chatbot-widget ${isOpen ? "is-open" : ""}`}>
      <button
        type="button"
        className="chatbot-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Minimize chat widget" : "Open chat widget"}
      >
        <span className="chatbot-toggle__badge">AI</span>
        <span className="chatbot-toggle__text">
          {isOpen ? "Minimize" : "Ask Martin's AI Assistant"}
        </span>
        <span className="chatbot-toggle__icon">{isOpen ? "−" : "↑"}</span>
      </button>

      {isOpen && (
        <div className="chatbot-panel">
          <div className="chatbot-header">
            <div>
              <p className="chatbot-header__title">Martin's AI Assistant</p>
              <p className="chatbot-header__meta">Powered by Gemini AI</p>
            </div>
            <button
              type="button"
              className="chatbot-header__close"
              aria-label="Close chat widget"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>

          <div className="chatbot-messages">
            {chat.map((entry, index) => (
              <div
                key={`${entry.sender}-${index}`}
                className={`chatbot-message ${
                  entry.sender === "user"
                    ? "chatbot-message--user"
                    : "chatbot-message--bot"
                }`}
              >
                <span className="chatbot-message__label">
                  {entry.sender === "user" ? "You" : "AI Assistant"}
                </span>
                {entry.sender === "user" ? (
                  <span className="chatbot-message__content">{entry.text}</span>
                ) : (
                  <div className="chatbot-message__content">
                    {renderStructuredContent(entry.text)}
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="chatbot-message chatbot-message--bot">
                <span className="chatbot-message__label">AI Assistant</span>
                <span
                  className="chatbot-typing"
                  aria-label="Assistant is typing"
                >
                  <span className="chatbot-typing__dot" />
                  <span className="chatbot-typing__dot" />
                  <span className="chatbot-typing__dot" />
                </span>
              </div>
            )}
          </div>

          {error && <p className="chatbot-error">{error}</p>}

          <div className="chatbot-composer">
            <textarea
              className="chatbot-input"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Martin's work, skills, or projects..."
              aria-label="Message the AI assistant"
              rows={2}
            />
            <button
              type="button"
              className="chatbot-send"
              onClick={sendMessage}
              disabled={loading}
              aria-label="Send message"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
