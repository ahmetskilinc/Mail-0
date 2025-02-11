import { PageHeader } from "@/components/ui/page-header";

export default function FullWidthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-screen flex-col justify-center pt-20">
      <PageHeader />
      {children}
    </div>
  );
}
