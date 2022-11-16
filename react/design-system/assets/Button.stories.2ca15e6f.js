var s=Object.defineProperty;var e=(t,n)=>s(t,"name",{value:n,configurable:!0});import{$ as a}from"./index.module.0e2e42fd.js";import{c}from"./clsx.m.02fdd3a3.js";import{j as r}from"./jsx-runtime.ea2201f1.js";import"./index.7f46cd07.js";import"./iframe.f511c11d.js";function o({children:t,asChild:n}){return r(n?a:"button",{className:c("py-4 px-3 bg-cyan-500 rounded font-semibold text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white"),children:t})}e(o,"Button");try{o.displayName="Button",o.__docgenInfo={description:"",displayName:"Button",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Button.tsx#Button"]={docgenInfo:o.__docgenInfo,name:"Button",path:"src/components/Button.tsx#Button"})}catch{}const B={parameters:{storySource:{source:`import { Story, Meta } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "My Button",
    asChild: false,
  },
} as Meta<ButtonProps>;

export const Default: Story<ButtonProps> = (args) => <Button {...args} />;
`,locationsMap:{default:{startLoc:{col:43,line:13},endLoc:{col:73,line:13},startBody:{col:43,line:13},endBody:{col:73,line:13}}}}},title:"Button",component:o,args:{children:"My Button",asChild:!1}},y=e(t=>r(o,{...t}),"Default"),_=["Default"];export{y as Default,_ as __namedExportsOrder,B as default};
//# sourceMappingURL=Button.stories.2ca15e6f.js.map
