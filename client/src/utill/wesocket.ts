export const connectToWebSocket = (
  id: number,
  messageCallback: (messageData: string) => void
): WebSocket => {
  const client = new WebSocket(
    `${import.meta.env.VITE_WEBSOCKET}/ws/chat?roomId=${id}&token=${
      import.meta.env.VITE_TOKEN
    }`
  );

  client.onopen = () => {
    console.log('connected');
  };

  client.onmessage = (message) => {
    console.log(message.data);
    messageCallback(message.data);
  };

  return client;
};

export const closeWebSocket = (websocket: WebSocket) => {
  websocket.close();
};
