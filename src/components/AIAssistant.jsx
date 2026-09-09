import React, { useState, useRef, useEffect } from 'react';
import { profile } from '../data/profile';
import { skills } from '../data/skills';
import { projects } from '../data/projects';
import { experience } from '../data/experience';
import { education } from '../data/education';

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Akshay's AI assistant. I can help you learn about his skills, projects, and experience. What would you like to know?",
      sender: 'assistant',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const quickQuestions = [
    { label: 'Main skills?', question: "What are Akshay's main skills?" },
    { label: 'Projects', question: "Tell me about Akshay's projects" },
    { label: 'Experience', question: "What is Akshay's experience?" },
    { label: 'Contact info', question: 'How can I contact Akshay?' },
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const getAIResponse = (question) => {
    const q = question.toLowerCase();

    // Skills questions
    if (q.includes('skill') || q.includes('technology') || q.includes('tech stack')) {
      const frontendSkills = skills.frontend.items.map((s) => s.name).join(', ');
      const backendSkills = skills.backend.items.map((s) => s.name).join(', ');
      const toolsSkills = skills.tools.items.map((s) => s.name).join(', ');
      return `${profile.name} specializes in full-stack development with expertise in:\n\n**Frontend:** ${frontendSkills}\n\n**Backend:** ${backendSkills}\n\n**Tools:** ${toolsSkills}`;
    }

    // Projects questions
    if (q.includes('project') || q.includes('built') || q.includes('portfolio')) {
      if (projects.length === 0) {
        return `${profile.name} is currently building several projects. Check back soon or visit the Projects page for updates!`;
      }
      const projectList = projects
        .slice(0, 3)
        .map(
          (p, i) =>
            `**${i + 1}. ${p.title}**\n${p.description}\nTech: ${p.technologies.slice(0, 3).join(', ')}`
        )
        .join('\n\n');
      return `${profile.name} has built several impressive projects:\n\n${projectList}\n\nCheck out the Projects page to see more details!`;
    }

    // Experience questions
    if (q.includes('experience') || q.includes('work history') || q.includes('job')) {
      if (experience.length === 0) {
        const edu = education[0];
        return `${profile.name} is currently completing a ${edu.degree} in ${edu.field} at ${edu.institution}. As an aspiring full-stack developer, ${profile.name} has built multiple personal projects demonstrating proficiency in modern web development.`;
      }
      const expList = experience
        .slice(0, 2)
        .map(
          (e) =>
            `**${e.role}** at ${e.company}\n${e.startDate} - ${e.current ? 'Present' : e.endDate}`
        )
        .join('\n\n');
      return `Here's ${profile.name}'s experience:\n\n${expList}\n\nVisit the Experience page for more details!`;
    }

    // Education questions
    if (q.includes('education') || q.includes('study') || q.includes('university') || q.includes('degree')) {
      const edu = education[0];
      return `**${edu.degree}** in ${edu.field}\n${edu.institution}, ${edu.location}\n${edu.startDate} - ${edu.endDate}\n\n${edu.description}`;
    }

    // Contact questions
    if (q.includes('contact') || q.includes('reach') || q.includes('email') || q.includes('hire')) {
      return `You can reach ${profile.name} at:\n\n📧 Email: ${profile.email}\n📍 Location: ${profile.location}\n\nFeel free to connect on LinkedIn or GitHub using the links in the footer!`;
    }

    // About questions
    if (q.includes('about') || q.includes('who') || q.includes('introduction')) {
      return `${profile.bio}\n\n**Current Status:** ${profile.availability}`;
    }

    // React/Frontend specific
    if (q.includes('react') || q.includes('frontend')) {
      const frontendSkills = skills.frontend.items.map((s) => s.name).join(', ');
      return `${profile.name} has strong frontend skills with ${frontendSkills}. Check out the Projects page to see React skills in action!`;
    }

    // Backend specific
    if (q.includes('backend') || q.includes('server') || q.includes('api')) {
      const backendSkills = skills.backend.items.map((s) => s.name).join(', ');
      return `${profile.name}'s backend expertise includes ${backendSkills}. All projects feature custom REST APIs!`;
    }

    // Default response
    return "I can help you learn about Akshay's skills, projects, experience, and education. Try asking:\n\n• What are Akshay's main skills?\n• Tell me about the projects\n• What is Akshay's experience?\n• How can I contact Akshay?";
  };

  const handleSendMessage = async () => {
    const message = inputValue.trim();
    if (!message) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: message,
      sender: 'user',
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setShowQuickQuestions(false);

    // Show typing indicator
    setIsTyping(true);

    // Simulate AI response delay
    await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 700));

    // Get AI response
    const response = getAIResponse(message);

    // Add assistant message
    const assistantMessage = {
      id: Date.now() + 1,
      text: response,
      sender: 'assistant',
    };

    setIsTyping(false);
    setMessages((prev) => [...prev, assistantMessage]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickQuestion = (question) => {
    setInputValue(question);
    handleSendMessage();
  };

  const formatMessage = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br/>');
  };

  return (
    <>
      <style>{`
        .ai-chat-widget {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 1000;
        }

        .ai-chat-button {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border: none;
          cursor: pointer;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .ai-chat-button:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4);
        }

        .ai-chat-button svg {
          width: 28px;
          height: 28px;
          color: white;
        }

        .ai-chat-panel {
          position: fixed;
          bottom: 100px;
          right: 24px;
          width: 380px;
          height: 550px;
          background: var(--bg-card);
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid var(--border);
          animation: slideUp 0.3s ease-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .ai-chat-header {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ai-chat-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .ai-chat-header-text h3 {
          font-size: 16px;
          font-weight: 600;
          margin: 0 0 2px 0;
        }

        .ai-chat-header-text p {
          font-size: 13px;
          opacity: 0.9;
          margin: 0;
        }

        .ai-chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .ai-message {
          display: flex;
          gap: 10px;
          max-width: 85%;
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .ai-message.user {
          align-self: flex-end;
          flex-direction: row-reverse;
        }

        .ai-message-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #667eea;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 16px;
        }

        .ai-message.user .ai-message-avatar {
          background: var(--bg-secondary);
          color: var(--text-primary);
        }

        .ai-message-content {
          background: #667eea;
          color: white;
          padding: 12px 16px;
          border-radius: 16px 16px 16px 4px;
          font-size: 14px;
          line-height: 1.5;
        }

        .ai-message.user .ai-message-content {
          background: var(--bg-secondary);
          color: var(--text-primary);
          border-radius: 16px 16px 4px 16px;
        }

        .ai-typing {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 12px 16px;
          background: #667eea;
          border-radius: 16px;
          width: fit-content;
        }

        .ai-typing-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          animation: typingBounce 1.4s infinite;
        }

        .ai-typing-dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .ai-typing-dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typingBounce {
          0%, 60%, 100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-8px);
          }
        }

        .ai-quick-questions {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 12px;
        }

        .ai-quick-question {
          background: var(--bg-secondary);
          color: var(--text-primary);
          padding: 8px 14px;
          border-radius: 16px;
          font-size: 13px;
          border: 1px solid var(--border);
          cursor: pointer;
          transition: all 0.2s;
        }

        .ai-quick-question:hover {
          background: #667eea;
          color: white;
          border-color: #667eea;
        }

        .ai-chat-input-container {
          padding: 16px;
          border-top: 1px solid var(--border);
          background: var(--bg-card);
        }

        .ai-chat-input-wrapper {
          display: flex;
          gap: 8px;
          align-items: flex-end;
        }

        .ai-chat-input {
          flex: 1;
          padding: 12px 16px;
          border: 1px solid var(--border);
          border-radius: 24px;
          background: var(--bg-page);
          color: var(--text-primary);
          font-size: 14px;
          font-family: inherit;
          resize: none;
          max-height: 120px;
          line-height: 1.4;
        }

        .ai-chat-input:focus {
          outline: none;
          border-color: #667eea;
        }

        .ai-send-button {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #667eea;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, transform 0.1s;
          flex-shrink: 0;
        }

        .ai-send-button:hover {
          background: #764ba2;
        }

        .ai-send-button:active {
          transform: scale(0.95);
        }

        .ai-send-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .ai-send-button svg {
          width: 18px;
          height: 18px;
          color: white;
        }

        @media (max-width: 480px) {
          .ai-chat-panel {
            width: calc(100vw - 32px);
            height: calc(100vh - 140px);
            right: 16px;
            bottom: 90px;
          }

          .ai-chat-widget {
            bottom: 16px;
            right: 16px;
          }
        }
      `}</style>

      <div className="ai-chat-widget">
        <button
          className="ai-chat-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle AI Assistant"
        >
          {isOpen ? (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          )}
        </button>

        {isOpen && (
          <div className="ai-chat-panel">
            <div className="ai-chat-header">
              <div className="ai-chat-avatar">🤖</div>
              <div className="ai-chat-header-text">
                <h3>AI Assistant</h3>
                <p>Ask me about Akshay's work</p>
              </div>
            </div>

            <div className="ai-chat-messages">
              {messages.map((message) => (
                <div key={message.id} className={`ai-message ${message.sender}`}>
                  <div className="ai-message-avatar">
                    {message.sender === 'user' ? '👤' : '🤖'}
                  </div>
                  <div
                    className="ai-message-content"
                    dangerouslySetInnerHTML={{ __html: formatMessage(message.text) }}
                  />
                </div>
              ))}

              {showQuickQuestions && messages.length === 1 && (
                <div className="ai-quick-questions">
                  {quickQuestions.map((q, i) => (
                    <button
                      key={i}
                      className="ai-quick-question"
                      onClick={() => handleQuickQuestion(q.question)}
                    >
                      {q.label}
                    </button>
                  ))}
                </div>
              )}

              {isTyping && (
                <div className="ai-typing">
                  <div className="ai-typing-dot"></div>
                  <div className="ai-typing-dot"></div>
                  <div className="ai-typing-dot"></div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="ai-chat-input-container">
              <div className="ai-chat-input-wrapper">
                <textarea
                  ref={inputRef}
                  className="ai-chat-input"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  rows="1"
                />
                <button
                  className="ai-send-button"
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  aria-label="Send message"
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
