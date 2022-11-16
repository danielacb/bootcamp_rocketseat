var s=Object.defineProperty;var t=(o,r)=>s(o,"name",{value:r,configurable:!0});import{T as n}from"./Text.b3a4a680.js";import{j as e}from"./jsx-runtime.ea2201f1.js";import"./index.module.0e2e42fd.js";import"./index.7f46cd07.js";import"./iframe.f511c11d.js";import"./clsx.m.02fdd3a3.js";const g={parameters:{storySource:{source:`import { Story, Meta } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
  title: "Text",
  component: Text,
  args: {
    children: "My text",
    size: "md",
    asChild: false,
  },
} as Meta<TextProps>;

export const Default: Story<TextProps> = (args) => <Text {...args} />;

export const Small: Story<TextProps> = (args) => <Text {...args} size="sm" />;

export const Large: Story<TextProps> = (args) => <Text {...args} size="lg" />;

export const CustomComponent: Story<TextProps> = (args) => (
  <Text {...args}>
    <p>I am a paragraph</p>
  </Text>
);

CustomComponent.args = { asChild: true };
`,locationsMap:{default:{startLoc:{col:41,line:14},endLoc:{col:69,line:14},startBody:{col:41,line:14},endBody:{col:69,line:14}},small:{startLoc:{col:39,line:16},endLoc:{col:77,line:16},startBody:{col:39,line:16},endBody:{col:77,line:16}},large:{startLoc:{col:39,line:18},endLoc:{col:77,line:18},startBody:{col:39,line:18},endBody:{col:77,line:18}},"custom-component":{startLoc:{col:49,line:20},endLoc:{col:1,line:24},startBody:{col:49,line:20},endBody:{col:1,line:24}}}}},title:"Text",component:n,args:{children:"My text",size:"md",asChild:!1}},T=t(o=>e(n,{...o}),"Default"),y=t(o=>e(n,{...o,size:"sm"}),"Small"),u=t(o=>e(n,{...o,size:"lg"}),"Large"),a=t(o=>e(n,{...o,children:e("p",{children:"I am a paragraph"})}),"CustomComponent");a.args={asChild:!0};const f=["Default","Small","Large","CustomComponent"];export{a as CustomComponent,T as Default,u as Large,y as Small,f as __namedExportsOrder,g as default};
//# sourceMappingURL=Text.stories.28c052ba.js.map
