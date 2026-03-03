"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroLogoBillboard from "@/components/sections/hero/HeroLogoBillboard";
import InlineImageSplitTextAbout from "@/components/sections/about/InlineImageSplitTextAbout";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import FaqSplitMedia from "@/components/sections/faq/FaqSplitMedia";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import { Leaf, Droplet, Shield, Recycle, Earth, Sparkles, Heart } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="small"
      sizing="largeSmallSizeLargeTitles"
      background="circleGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="solid"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Products", id: "products" },
            { name: "Benefits", id: "features" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Shop Now",            href: "products"
          }}
          brandName="Lumière Skincare"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="Lumière"
          description="Unveil your skin's natural radiance with our luxurious, science-backed skincare collection. Pure ingredients. Proven results. Timeless beauty."
          buttons={[
            { text: "Explore Collection", href: "products" },
            { text: "Learn Our Story", href: "about" }
          ]}
          background={{ variant: "sparkles-gradient" }}
          imageSrc="http://img.b2bpic.net/free-photo/top-view-tropical-leaves-vibrant-background-summer-flat-lay-composition_1182-2695.jpg"
          imageAlt="Luxury skincare products"
          mediaAnimation="blur-reveal"
          frameStyle="card"
          buttonAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "Crafted with" },
            { type: "image", src: "http://img.b2bpic.net/free-photo/flat-lay-natural-cosmetics-concept_23-2148565396.jpg", alt: "Natural ingredients" },
            { type: "text", content: "nature's finest essences" }
          ]}
          buttons={[
            { text: "Discover Ingredients", href: "#ingredients" }
          ]}
          useInvertedBackground={false}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          products={[
            {
              id: "1",              name: "Luminous Elixir Serum",              price: "$68",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-skin-regeneration-products_23-2151242151.jpg",              imageAlt: "Luminous Elixir Serum bottle"
            },
            {
              id: "2",              name: "Velvet Renewal Cream",              price: "$82",              imageSrc: "http://img.b2bpic.net/free-photo/luxury-cream-jar-silk-fabric_9975-134546.jpg",              imageAlt: "Velvet Renewal Cream jar"
            },
            {
              id: "3",              name: "Purifying Essence Cleanser",              price: "$45",              imageSrc: "http://img.b2bpic.net/free-photo/unlabeled-beauty-skincare-products-bathroom_53876-134411.jpg",              imageAlt: "Purifying Essence Cleanser bottle"
            }
          ]}
          title="Our Signature Collection"
          description="Each product is meticulously formulated to deliver visible results while nourishing your skin with premium natural ingredients."
          tag="Bestsellers"
          tagIcon={Sparkles}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          tagAnimation="blur-reveal"
          buttonAnimation="slide-up"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureBento
          title="Why Choose Lumière"
          description="Our commitment to excellence sets us apart in the beauty industry."
          features={[
            {
              title: "100% Natural Ingredients",              description: "Sourced from sustainable farms and ethically harvested",              bentoComponent: "icon-info-cards",              items: [
                { icon: Leaf, label: "Organic", value: "100%" },
                { icon: Droplet, label: "Hydrating", value: "Deep" },
                { icon: Shield, label: "Safe", value: "Tested" }
              ]
            },
            {
              title: "Dermatologist Approved",              description: "Recommended by skincare professionals worldwide",              bentoComponent: "globe"
            },
            {
              title: "Visible Results",              description: "See transformation in just 4 weeks",              bentoComponent: "line-chart"
            },
            {
              title: "Eco-Conscious Packaging",              description: "100% recyclable and biodegradable materials",              bentoComponent: "orbiting-icons",              centerIcon: Leaf,
              items: [
                { icon: Recycle, ring: 1 },
                { icon: Droplet, ring: 2 },
                { icon: Earth, ring: 3 }
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="My skin has never looked better. After just three weeks of using Lumière's serum, my complexion is visibly brighter, smoother, and more radiant. The quality and elegance of these products is truly unmatched."
          rating={5}
          author="Sarah Mitchell, Skincare Enthusiast"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/closeup-portrait-smiling-spanish-woman_633478-1821.jpg", alt: "Sarah Mitchell" },
            { src: "http://img.b2bpic.net/free-photo/pretty-young-woman-indoor_624325-3567.jpg", alt: "Emma Johnson" },
            { src: "http://img.b2bpic.net/free-photo/gentle-beauty-model-applying-face-cream-camera-posing-skincare-routine-campaign-bamboo-trees-young-glamorous-woman-with-natural-bare-skin-using-moisturizer-cosmetics_482257-62836.jpg", alt: "Jessica Lee" },
            { src: "http://img.b2bpic.net/free-photo/portrait-woman-washing-off-her-face-takes-off-makeup-with-cosmetic-pad-puts-skincare-cleanser_1258-203205.jpg", alt: "Amanda Garcia" }
          ]}
          useInvertedBackground={false}
          ratingAnimation="blur-reveal"
          avatarsAnimation="slide-up"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Common Questions"
          description="Everything you need to know about our skincare products and how to get the most from your routine."
          tag="Help"
          faqs={[
            {
              id: "1",              title: "How long does it take to see results?",              content: "Most customers notice visible improvements in skin texture and radiance within 2-4 weeks of consistent use. For deeper transformations in fine lines and pigmentation, allow 8-12 weeks."
            },
            {
              id: "2",              title: "Are your products suitable for all skin types?",              content: "Yes, our formulations are designed to be gentle yet effective for all skin types including sensitive, oily, combination, and dry skin. Each product is dermatologist-tested for safety."
            },
            {
              id: "3",              title: "Do you offer a money-back guarantee?",              content: "Absolutely. We offer a 60-day money-back guarantee. If you're not satisfied with your results, simply return the product for a full refund."
            },
            {
              id: "4",              title: "Are your ingredients organic and ethically sourced?",              content: "Yes, all our ingredients are certified organic and sourced from sustainable, ethically managed farms. We prioritize environmental responsibility in every aspect of our supply chain."
            },
            {
              id: "5",              title: "What is your recommended skincare routine?",              content: "We recommend: Cleanser in morning and night, Serum in morning and night, and Cream in morning and night. For best results, apply serum to damp skin and follow with cream while skin is still slightly moist."
            },
            {
              id: "6",              title: "Do you ship internationally?",              content: "Yes, we ship to over 50 countries worldwide. Shipping times vary by location, typically 7-14 business days. All shipments include tracking information."
            }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/young-woman-applies-cream-her-face-looks-mirror_169016-19492.jpg"
          imageAlt="Skincare routine"
          mediaAnimation="blur-reveal"
          mediaPosition="left"
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          tagAnimation="blur-reveal"
          buttonAnimation="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          title="Join Our Beauty Community"
          description="Subscribe to receive exclusive skincare tips, early access to new products, and special beauty offers delivered to your inbox."
          tagIcon={Heart}
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          inputPlaceholder="your@email.com"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime."
          tagAnimation="blur-reveal"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Lumière"
          columns={[
            {
              title: "Shop",              items: [
                { label: "All Products", href: "#products" },
                { label: "Serums", href: "#products" },
                { label: "Moisturizers", href: "#products" },
                { label: "Cleansers", href: "#products" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Story", href: "#about" },
                { label: "Sustainability", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Support",              items: [
                { label: "Contact Us", href: "#contact" },
                { label: "FAQ", href: "#faq" },
                { label: "Shipping", href: "#" },
                { label: "Returns", href: "#" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Pinterest", href: "https://pinterest.com" },
                { label: "TikTok", href: "https://tiktok.com" }
              ]
            }
          ]}
          copyrightText="© 2025 Lumière Skincare. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}