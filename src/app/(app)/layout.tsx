"use client"
import Navbar from "@/components/Navbar";
import {UserThread} from ".prisma/client";
import {useEffect, useState} from "react";
import axios from "axios";
import {assistantAtom, userThreadAtom} from "../../../atoms";
import {useAtom} from "jotai";
export default function AppLayout({
                                      children,
                                  }: {
    children: React.ReactNode
}) {
    const [, setUserThread] = useAtom(userThreadAtom);
    const [assistant, setAssistant] = useAtom(assistantAtom);
    // const [userThread, setUserThread] = useState<UserThread | null>(null);
    useEffect(() => {
        async function getUserThread() {
            try {
                const response = await axios.get<{
                    success: boolean;
                    message?: string;
                    userThread: UserThread;
                }>("/api/user-thread");

                if (!response.data.success || !response.data.userThread) {
                    console.error(response.data.message ?? "Unknown error.");
                    setUserThread(null);
                    return;
                }

                setUserThread(response.data.userThread);
            } catch (error) {
                console.error(error);
                setUserThread(null);
            }
        }

        getUserThread();
    }, [setUserThread]);
    return <section className="flex flex-col w-full h-full">
        <Navbar/>
        {children}
    </section>
}
