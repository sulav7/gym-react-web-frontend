import PricingCards from "../about/pricing";

export function Package() {
  return (
    <>
      <h1 className="text-center ">
        Our Packages & <span className="text-primary">Pricing</span>
      </h1>
      <PricingCards />
    </>
  );
}
