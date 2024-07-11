import DashboardSidebar from "@/components/DashboardSidebar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <main className="flex flex-grow-4 gap-4 text-slate-400 leading-relaxed antialiased selection:bg-purple-300 selection:text-purple-900">
            <DashboardSidebar />

            <div className="px-2 w-full">
                {children}
            </div>
        </main>

    );
}
