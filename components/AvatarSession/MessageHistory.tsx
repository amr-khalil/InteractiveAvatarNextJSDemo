import React, { useEffect, useRef } from "react";

import { useMessageHistory, MessageSender } from "../logic";

export const MessageHistory: React.FC = () => {
  const { messages } = useMessageHistory();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container || messages.length === 0) return;

    container.scrollTop = container.scrollHeight;
  }, [messages]);

  return (
    <div
      ref={containerRef}
      className="w-[600px] overflow-y-auto flex flex-col gap-2 px-2 py-2 text-seconary self-center max-h-[150px]"
    >
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex flex-col gap-1 max-w-[350px] ${
            message.sender === MessageSender.CLIENT
              ? "self-end items-end"
              : "self-start items-start"
          }`}
        >
          <p className="text-xs text-primary">
            {message.sender === MessageSender.AVATAR ? "AI Agent" : "Du"}
          </p>
          <div
            className={`text-sm px-4 py-2 rounded-lg shadow-md ${
              message.sender === MessageSender.AVATAR
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {message.content}
          </div>
        </div>
      ))}
    </div>
  );
};
