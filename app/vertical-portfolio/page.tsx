import PageBanner from "../components/layout/PageBanner";
import VerticalTabs from "../components/Verticalpage/VerticalTabs";

export default function VerticalPortfolioPage() {
    return (
        <section>
            <PageBanner
                title="Vertical Portfolio"
                breadcrumbs={[
                    { name: "Home", url: "/" },
                    { name: "Vertical Portfolio" }
                ]} />

            <div id="content" className="w-full scroll-mt-16 md:scroll-mt-20">
                <VerticalTabs />
            </div>
        </section>
    )
}