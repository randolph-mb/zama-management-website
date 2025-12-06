/**
 * Content-related types
 */

/**
 * Service offering
 */
export interface Service {
  id?: string;
  icon: string;
  title: string;
  description?: string;
  color?: string;
}

/**
 * Testimonial/review
 */
export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  company: string;
  image: string;
  position?: string;
}

/**
 * Team member
 */
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio?: string;
  image: string;
  email?: string;
  linkedin?: string;
}

/**
 * Contact information
 */
export interface ContactInfo {
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  social: {
    instagram?: string;
    linkedin?: string;
    whatsapp?: string;
  };
}

/**
 * FAQ item
 */
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

/**
 * Section metadata
 */
export interface SectionMeta {
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
}
