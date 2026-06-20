

import PageBanner from "../components/layout/PageBanner";
import FactsAndInsights from "../components/Knowledgepage/FactsAndInsights";

export default function KnowledgeHub() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-white">
            <PageBanner 
              title="Knowledge Hub" 
              breadcrumbs={[
                { name: "Home", url: "/" },
                { name: "Knowledge Hub" }
              ]} 
            />
            <FactsAndInsights />
        </main>
    );
}