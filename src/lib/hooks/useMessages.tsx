"use client";
import { useQuery } from '@tanstack/react-query';
import {fetchMessages} from "@/lib/api/FetchMessages";


export function useMessages(threadId: string) {
  return useQuery({
    queryKey: ['messages', threadId],
    queryFn: () => fetchMessages(threadId),
  });
}
