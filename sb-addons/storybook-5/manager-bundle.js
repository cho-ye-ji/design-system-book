try{
(()=>{var k=__STORYBOOK_API__,{ActiveTabs:_,Consumer:x,ManagerContext:T,Provider:v,RequestResponseError:A,Tag:M,addons:d,combineParameters:f,controlOrMetaKey:E,controlOrMetaSymbol:P,eventMatchesShortcut:w,eventToShortcut:O,experimental_MockUniversalStore:C,experimental_UniversalStore:L,experimental_getStatusStore:H,experimental_getTestProviderStore:q,experimental_requestResponse:R,experimental_useStatusStore:K,experimental_useTestProviderStore:B,experimental_useUniversalStore:I,internal_checklistStore:U,internal_fullStatusStore:F,internal_fullTestProviderStore:G,internal_universalChecklistStore:Y,internal_universalStatusStore:$,internal_universalTestProviderStore:j,isMacLike:z,isShortcutTaken:D,keyToSymbol:J,merge:N,mockChannel:Q,optionOrAltSymbol:V,shortcutMatchesShortcut:W,shortcutToAriaKeyshortcuts:X,shortcutToHumanString:Z,types:ee,useAddonState:te,useArgTypes:re,useArgs:oe,useChannel:ae,useGlobalTypes:ne,useGlobals:se,useParameter:ie,useSharedState:le,useStoryPrepared:de,useStorybookApi:ue,useStorybookState:ce}=__STORYBOOK_API__;var u=document.createElement("style");u.textContent=`
  #storybook-sidebar-region [data-radix-scroll-area-viewport] {
    scrollbar-width: thin !important;
    scrollbar-color: rgba(0,0,0,0.2) transparent !important;
  }
  #storybook-sidebar-region [data-radix-scroll-area-viewport]::-webkit-scrollbar {
    display: block !important;
    width: 6px !important;
  }
  #storybook-sidebar-region [data-radix-scroll-area-viewport]::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.2);
    border-radius: 3px;
  }
  #storybook-sidebar-region [data-radix-scroll-area-viewport]::-webkit-scrollbar-track {
    background: transparent;
  }
`;document.head.appendChild(u);d.setConfig({sidebar:{collapsedRoots:["Button","Form","Feedback"]}});document.addEventListener("click",c=>{let t=c.target.closest("button[aria-expanded]:not([aria-haspopup])");if(!t||t.getAttribute("aria-expanded")!=="false")return;let e=t.closest("[data-item-id]");if(!e)return;let o=e.getAttribute("data-nodetype");if(o==="story"||o==="document")return;let r=document.querySelector("#storybook-explorer-tree");if(!r)return;let a=e.getAttribute("data-parent-id");(a?r.querySelectorAll(`[data-parent-id="${a}"]`):r.querySelectorAll('[data-nodetype="root"]')).forEach(n=>{n!==e&&n.querySelector('button[aria-expanded="true"]:not([aria-haspopup])')?.click()})},!0);})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
