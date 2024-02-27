export async function fetchMessages(threadId: string) {
  const response = await fetch(`/api/message/list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ threadId }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}