/**
 * Design System Showcase Page
 * Visual demonstration of all design tokens and components
 */

import React from "react";
import {
  Button,
  ProductCard,
  H3,
  H4,
  H5,
  H6,
  Body2,
  Body3,
  Body4,
  Label1,
} from "../components/examples";

export const DesignSystemShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-primary">
      {/* Header */}
      <div className="bg-accent-darker2 text-white p-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-h3 font-bold mb-xs">Design System Showcase</h1>
          <p className="text-body-2">
            Visual demonstration of design tokens extracted from Figma
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-lg space-y-lg">
        {/* Colors Section */}
        <section className="bg-background-surface p-md rounded-md shadow-elevation-1">
          <H4 className="mb-md">Colors</H4>

          <div className="space-y-md">
            {/* Accent Colors */}
            <div>
              <Label1 className="mb-xs block">Accent Colors</Label1>
              <div className="flex gap-md flex-wrap">
                <div className="space-y-xs">
                  <div className="w-24 h-24 bg-accent rounded-md shadow-elevation-1"></div>
                  <Body3>Primary Accent</Body3>
                  <Body4 className="text-text-disabled">#5151cd</Body4>
                </div>
                <div className="space-y-xs">
                  <div className="w-24 h-24 bg-accent-darker rounded-md shadow-elevation-1"></div>
                  <Body3>Accent Darker</Body3>
                  <Body4 className="text-text-disabled">#5753c6</Body4>
                </div>
                <div className="space-y-xs">
                  <div className="w-24 h-24 bg-accent-darker2 rounded-md shadow-elevation-1"></div>
                  <Body3>Accent Darker 2</Body3>
                  <Body4 className="text-text-disabled">#272962</Body4>
                </div>
              </div>
            </div>

            {/* Background Colors */}
            <div>
              <Label1 className="mb-xs block">Background Colors</Label1>
              <div className="flex gap-md flex-wrap">
                <div className="space-y-xs">
                  <div className="w-24 h-24 bg-background-primary border border-border-primary rounded-md"></div>
                  <Body3>Primary</Body3>
                  <Body4 className="text-text-disabled">#fbfdfc</Body4>
                </div>
                <div className="space-y-xs">
                  <div className="w-24 h-24 bg-background-surface border border-border-primary rounded-md"></div>
                  <Body3>Surface</Body3>
                  <Body4 className="text-text-disabled">#fffffffa</Body4>
                </div>
                <div className="space-y-xs">
                  <div className="w-24 h-24 bg-background-panel rounded-md"></div>
                  <Body3>Panel</Body3>
                  <Body4 className="text-text-disabled">#f0f1fe</Body4>
                </div>
              </div>
            </div>

            {/* Text Colors */}
            <div>
              <Label1 className="mb-xs block">Text Colors</Label1>
              <div className="space-y-xs">
                <Body2 className="text-text-primary">
                  Primary Text (#5f6563)
                </Body2>
                <Body2 className="text-text-highContrast">
                  High Contrast Text (#1a211e)
                </Body2>
                <Body2 className="text-text-accent">
                  Accent Text (#5753c6)
                </Body2>
                <div className="bg-accent-darker2 p-xs rounded-md inline-block">
                  <Body2 className="text-text-white">
                    White Text (#fdfdff)
                  </Body2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section className="bg-background-surface p-md rounded-md shadow-elevation-1">
          <H4 className="mb-md">Typography</H4>

          <div className="space-y-md">
            <div>
              <Label1 className="mb-xs block">Headings</Label1>
              <div className="space-y-xs">
                <H3>Heading 3 - 40px Bold</H3>
                <H4>Heading 4 - 32px Bold</H4>
                <H5>Heading 5 - 24px Medium</H5>
                <H6>Heading 6 - 20px Bold</H6>
              </div>
            </div>

            <div>
              <Label1 className="mb-xs block">Body Text</Label1>
              <div className="space-y-xs">
                <Body2>Body 2 Regular - 16px (Paragraph text)</Body2>
                <Body2 medium>Body 2 Medium - 16px (Emphasized text)</Body2>
                <Body3>Body 3 Regular - 14px (Secondary content)</Body3>
                <Body3 medium>
                  Body 3 Medium - 14px (Emphasized secondary)
                </Body3>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="bg-background-surface p-md rounded-md shadow-elevation-1">
          <H4 className="mb-md">Buttons</H4>

          <div className="space-y-md">
            <div>
              <Label1 className="mb-xs block">Button Variants</Label1>
              <div className="flex gap-md flex-wrap">
                <Button variant="fill">Fill Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="alpha">Alpha Button</Button>
              </div>
            </div>

            <div>
              <Label1 className="mb-xs block">Button Sizes</Label1>
              <div className="flex gap-md items-end flex-wrap">
                <Button variant="fill" size="md">
                  Medium Button
                </Button>
                <Button variant="fill" size="lg">
                  Large Button
                </Button>
              </div>
            </div>

            <div>
              <Label1 className="mb-xs block">Button States</Label1>
              <div className="flex gap-md flex-wrap">
                <Button variant="fill">Normal</Button>
                <Button variant="fill" disabled>
                  Disabled
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing Section */}
        <section className="bg-background-surface p-md rounded-md shadow-elevation-1">
          <H4 className="mb-md">Spacing</H4>

          <div className="space-y-md">
            <Label1 className="mb-xs block">Spacing Scale</Label1>
            <div className="space-y-xs">
              {[
                { name: "2xs", value: "4px" },
                { name: "xs", value: "8px" },
                { name: "sm", value: "16px" },
                { name: "md", value: "24px" },
                { name: "lg", value: "32px" },
              ].map((space) => (
                <div key={space.name} className="flex items-center gap-md">
                  <Body3 className="w-20">{space.name}</Body3>
                  <div
                    className="bg-accent h-8"
                    style={{ width: space.value }}
                  ></div>
                  <Body4 className="text-text-disabled">{space.value}</Body4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Border Radius Section */}
        <section className="bg-background-surface p-md rounded-md shadow-elevation-1">
          <H4 className="mb-md">Border Radius</H4>

          <div className="flex gap-md flex-wrap">
            <div className="space-y-xs">
              <div className="w-24 h-24 bg-accent rounded-sm"></div>
              <Body3>Small (6px)</Body3>
            </div>
            <div className="space-y-xs">
              <div className="w-24 h-24 bg-accent rounded-8"></div>
              <Body3>8px</Body3>
            </div>
            <div className="space-y-xs">
              <div className="w-24 h-24 bg-accent rounded-md"></div>
              <Body3>Medium (16px)</Body3>
            </div>
            <div className="space-y-xs">
              <div className="w-24 h-24 bg-accent rounded-full"></div>
              <Body3>Full (9999px)</Body3>
            </div>
          </div>
        </section>

        {/* Shadows Section */}
        <section className="bg-background-surface p-md rounded-md shadow-elevation-1">
          <H4 className="mb-md">Shadows</H4>

          <div className="flex gap-md flex-wrap">
            <div className="space-y-xs">
              <div className="w-32 h-32 bg-white rounded-md shadow-elevation-1 flex items-center justify-center">
                <Body3>Elevation 1</Body3>
              </div>
            </div>
            <div className="space-y-xs">
              <div className="w-32 h-32 bg-white rounded-md shadow-blur-1 flex items-center justify-center">
                <Body3>Blur 1</Body3>
              </div>
            </div>
          </div>
        </section>

        {/* Product Card Examples */}
        <section className="bg-background-surface p-md rounded-md shadow-elevation-1">
          <H4 className="mb-md">Product Cards</H4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
            <ProductCard
              title="Web Development"
              description="Professional web development services for modern businesses"
              price={149.99}
              rating={4.8}
              tag="bestSeller"
              image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
            />
            <ProductCard
              title="Graphic Design"
              description="Creative design solutions for your brand"
              price={99.99}
              rating={4.5}
              tag="hotOffers"
              image="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop"
            />
            <ProductCard
              title="Digital Marketing"
              description="Boost your online presence with expert marketing"
              price={199.99}
              rating={4.9}
              tag="newArrivals"
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
            />
            <ProductCard
              title="Consultation"
              description="Expert advice for your business needs"
              price={79.99}
              rating={4.7}
              tag="lowStock"
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DesignSystemShowcase;
