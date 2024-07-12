import DashboardSidebar from "@/components/DashboardSidebar";
import ResponsiveSidebar from "@/components/ResponsiveSidebar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <main className="flex flex-grow-4 gap-4 text-slate-400 leading-relaxed antialiased selection:bg-purple-300 selection:text-purple-900">
            <DashboardSidebar />

            <div className="px-2 w-full py-5">
                <div className="inline-flex items-center justify-between gap-3 lg:gap-0">
                    <ResponsiveSidebar />
                    <h2 className="text-xl font-bold tracking-tight text-slate-200 sm:text-2xl">
                        Welcome to Nilesh's Dashboard
                    </h2>
                </div>
                {children}
            </div>
        </main>

    );
}
