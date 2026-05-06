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

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/industries', label: 'Industries' },
  { href: '/distributors', label: 'Distributors' },
  { href: '/about', label: 'About' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
];

export const company = {
  name: 'Buckeye Pads & Covers',
  tagline: 'Industrial Press Pads & Covers',
  email: 'customerservice@fhbonn.com',
  phone: '(937) 323-7024',
  officePhone: '(937) 462-5148',
  tollFree: '1.800.323.0143',
  hours: 'Monday – Friday 8:00 AM – 5:00 PM EST',
  addressLine1: '338 W Columbus Rd',
  addressLine2: 'South Charleston, OH 45368',
};

export const productCategories: ProductCategory[] = [
  {
    slug: 'dry-cleaning-pads',
    name: 'Dry Cleaning Pads',
    short: 'Precision-fit pads and covers for dry cleaning presses and finishing equipment.',
    description: 'Built for clean finishing, long service life, and reliable fit across major machine makes and models.',
    image: '/images/categories/dry-cleaning.svg',
    bullets: ['Tailor-made fit', 'OEM and aftermarket options', 'Common fits for Ajax, Cissell, Forenta, Sankosha, and Unipress'],
    applications: ['Press bucks', 'Steam air finishers', 'Pants toppers', 'Shirt units'],
  },
  {
    slug: 'laundry-pads-covers',
    name: 'Laundry Pads & Covers',
    short: 'Laundry press pads and covers designed for commercial finishing operations.',
    description: 'Durable fabrics and layered construction help maintain performance in demanding commercial laundry environments.',
    image: '/images/categories/laundry.svg',
    bullets: ['Commercial laundry applications', 'Heat and wear resistant materials', 'Built for repeatable performance'],
    applications: ['Body presses', 'Leggers', 'Utility presses', 'Finishing boards'],
  },
  {
    slug: 'steel-pads',
    name: 'Steel & Texsteel Pads',
    short: 'Steel and silicone base pads for heavy-duty finishing and specialty applications.',
    description: 'Engineered for high heat, durability, and clean finishing where standard pads are not enough.',
    image: '/images/categories/steel.svg',
    bullets: ['Texsteel options', 'Silicone base pad options', 'Suitable for high-demand finishing setups'],
    applications: ['Base pad replacements', 'High heat finishing stations', 'Specialty press systems'],
  },
  {
    slug: 'roll-goods-fabrics',
    name: 'Roll Goods & Fabrics',
    short: 'Industrial fabrics, layered materials, and roll goods for fabrication and replacement needs.',
    description: 'Useful for custom builds, maintenance work, and replacement programs across press and textile operations.',
    image: '/images/categories/roll-goods.svg',
    bullets: ['Fabric rolls', 'Replacement materials', 'Support for custom fabrication'],
    applications: ['Shop maintenance', 'Fabrication runs', 'Custom covers', 'Replacement programs'],
  },
  {
    slug: 'industrial-sewing',
    name: 'Industrial Sewing',
    short: 'Contract sewing and textile fabrication for industrial products and components.',
    description: 'The same sewing and fabrication capability behind the company’s press products can support other industrial textile work.',
    image: '/images/categories/sewing.svg',
    bullets: ['Custom fabrication available', 'Industrial contract sewing support', 'Fast quote path for custom work'],
    applications: ['Dust covers', 'Jackets', 'Fabricated components', 'Custom assemblies'],
  },
  {
    slug: 'knitted-wire-mesh',
    name: 'Knitted Wire Mesh',
    short: 'Fabricated knitted wire mesh components including demister pads and oil mist filters.',
    description: 'A separate capability that broadens the company’s manufacturing base beyond laundry and dry cleaning textiles.',
    image: '/images/categories/wire-mesh.svg',
    bullets: ['Demister pads', 'Oil mist filters', 'Fabricated wire mesh components'],
    applications: ['Industrial filtration', 'Mist elimination', 'Custom mesh assemblies'],
  },
];

export const industries: Industry[] = [
  {
    name: 'Commercial Dry Cleaning',
    description: 'Pads, covers, and accessories for presses, finishers, and toppers used in dry cleaning operations.',
    image: '/images/industries/dry-cleaning.svg',
  },
  {
    name: 'Commercial Laundry',
    description: 'Durable products for high-volume laundry finishing environments.',
    image: '/images/industries/laundry.svg',
  },
  {
    name: 'Equipment Manufacturers',
    description: 'OEM production support for manufacturers that need consistent quality and repeatable fit.',
    image: '/images/industries/oem.svg',
  },
  {
    name: 'Industrial Textile Fabrication',
    description: 'Contract sewing and specialty textile work for industrial applications.',
    image: '/images/industries/textile.svg',
  },
  {
    name: 'Wire Mesh Components',
    description: 'Knitted wire mesh parts including demister pads and oil mist filters.',
    image: '/images/industries/mesh.svg',
  },
];

export const resourceLinks = [
  {
    title: 'Product Catalogs',
    description: 'Downloadable product catalog section with dry cleaning, laundry, roll goods, and accessories information.',
    href: '#',
  },
  {
    title: 'Installation Videos',
    description: 'Training and product support content for customers and distributors.',
    href: '#',
  },
  {
    title: 'How to Find Make & Model',
    description: 'Ordering guidance based on make and model information from common machine manufacturers.',
    href: '#',
  },
  {
    title: 'Request a Quote',
    description: 'Simple quote intake page for product, OEM, and custom fabrication inquiries.',
    href: '/request-quote',
  },
];

export const distributorRegions = [
  'Midwest',
  'Northeast',
  'Southeast',
  'South Central',
  'West',
  'Canada',
  'International',
];
