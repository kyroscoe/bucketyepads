import siteContent from "@/content/site.json";

export type ProductCategory = {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: string;
  bullets: string[];
  applications: string[];
};

export type Industry = {
  name: string;
  description: string;
  image: string;
};

export type Distributor = {
  name: string;
  city: string;
  phone: string;
};

export type DistributorState = {
  state: string;
  distributors: Distributor[];
};

export const siteData = siteContent;
export const navLinks = siteContent.navLinks;
export const company = siteContent.company;
export const productCategories = siteContent.productCategories as ProductCategory[];
export const industries = siteContent.industries as Industry[];
export const resourceLinks = siteContent.resourceLinks;
export const distributorStates = siteContent.distributorStates as DistributorState[];
