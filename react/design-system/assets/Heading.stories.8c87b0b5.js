var l=Object.defineProperty;var o=(e,t)=>l(e,"name",{value:t,configurable:!0});import{$ as i}from"./index.module.0e2e42fd.js";import{c as d}from"./clsx.m.02fdd3a3.js";import{j as a}from"./jsx-runtime.ea2201f1.js";import"./index.7f46cd07.js";import"./iframe.f511c11d.js";function n({children:e,size:t="md",className:s,asChild:r}){return a(r?i:"h2",{className:d("text-gray-100 font-bold font-sans",{"text-lg":t==="sm","text-xl":t==="md","text-2xl":t==="lg"},s),children:e})}o(n,"Heading");try{n.displayName="Heading",n.__docgenInfo={description:"",displayName:"Heading",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Heading.tsx#Heading"]={docgenInfo:n.__docgenInfo,name:"Heading",path:"src/components/Heading.tsx#Heading"})}catch{}const C={parameters:{storySource:{source:`import { Story, Meta } from "@storybook/react";
import { Heading, HeadingProps } from "./Heading";

export default {
  title: "Heading",
  component: Heading,
  args: {
    children: "My Heading",
    size: "md",
    asChild: false,
  },
  argTypes: {
    size: { options: ["sm", "md", "lg"], control: { type: "inline-radio" } },
  },
} as Meta<HeadingProps>;

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Small: Story<HeadingProps> = (args) => (
  <Heading {...args} size="sm" />
);

export const Large: Story<HeadingProps> = (args) => (
  <Heading {...args} size="lg" />
);

export const CustomComponent: Story<HeadingProps> = (args) => (
  <Heading {...args}>
    <p>I am a paragraph</p>
  </Heading>
);

CustomComponent.args = { asChild: true };
`,locationsMap:{default:{startLoc:{col:44,line:17},endLoc:{col:75,line:17},startBody:{col:44,line:17},endBody:{col:75,line:17}},small:{startLoc:{col:42,line:19},endLoc:{col:1,line:21},startBody:{col:42,line:19},endBody:{col:1,line:21}},large:{startLoc:{col:42,line:23},endLoc:{col:1,line:25},startBody:{col:42,line:23},endBody:{col:1,line:25}},"custom-component":{startLoc:{col:52,line:27},endLoc:{col:1,line:31},startBody:{col:52,line:27},endBody:{col:1,line:31}}}}},title:"Heading",component:n,args:{children:"My Heading",size:"md",asChild:!1},argTypes:{size:{options:["sm","md","lg"],control:{type:"inline-radio"}}}},x=o(e=>a(n,{...e}),"Default"),S=o(e=>a(n,{...e,size:"sm"}),"Small"),_=o(e=>a(n,{...e,size:"lg"}),"Large"),c=o(e=>a(n,{...e,children:a("p",{children:"I am a paragraph"})}),"CustomComponent");c.args={asChild:!0};const h=["Default","Small","Large","CustomComponent"];export{c as CustomComponent,x as Default,_ as Large,S as Small,h as __namedExportsOrder,C as default};
//# sourceMappingURL=Heading.stories.8c87b0b5.js.map
