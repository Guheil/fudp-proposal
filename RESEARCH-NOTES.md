# Anti-AI-Slop Design Research

## What the research consistently warns against

The term “AI slop” is newer than most established design literature, so the research set combines direct criticism of AI-generated sameness with foundational UX, visual-design, accessibility, editorial-layout, photography, and motion guidance.

Patterns repeatedly associated with generic AI-made interfaces:

1. A default palette that is unrelated to the actual business, especially purple-blue gradients, cream-and-rust “tasteful” themes, neon-on-dark, or arbitrary accent colors.
2. Card overload: every piece of content placed inside a rounded rectangle, often with nested cards, icon badges, and identical spacing.
3. Template rhythm: centered hero, short subheading, two buttons, three feature cards, testimonials, FAQ, and a generic CTA regardless of the subject.
4. Interchangeable copy: “elevate your experience,” “discover more,” “crafted with passion,” and other claims that could describe any business.
5. Decoration without purpose: glow, glassmorphism, random dots, ticker bars, excessive pills, decorative rules, and elastic motion that does not help orientation.
6. Stock or synthetic images instead of real products, people, places, and physical details.
7. Typography selected from defaults rather than the brand's visual context.
8. Motion used as spectacle rather than to reveal relationships, sequence, place, or product.
9. Over-polished uniformity: every corner, gap, section height, image crop, and card treated exactly the same.
10. Missing real-world states and details: no actual address, hours, menu context, pricing caveats, accessibility fallbacks, or current-update path.

## How those findings shaped this website

- The redesign uses a modern after-dark editorial direction rather than a loud festival-poster aesthetic.
- The color system is based on the illuminated sign: near-black, warm ivory, electric blue, yellow, and a restrained pink accent.
- Gradients are prohibited throughout the CSS. Color appears in flat, deliberate blocks.
- The structure avoids repeated bento grids and interchangeable rounded cards. It uses full-width photography, large type, open space, directories, and editorial rules.
- Headings are direct and large. The pages do not repeat tiny eyebrow labels above every section.
- Food remains the main visual subject through large image-led stories, an interactive craving selector, and a hover-follow directory preview.
- Motion explains sequence and place: the homepage follows one evening from arrival to the last drink, while image reveals and parallax remain restrained.
- The intro plays once per browser session and disappears entirely for reduced-motion users.
- Real venue and public vendor images are used, with a clear instruction to replace them with owner-supplied originals before production.
- Public menu prices are labeled as references rather than permanent promises.
- Facebook remains the live source for rapidly changing vendors, events, and hours.
- The copy stays concrete and local: shared tables, rice meals, barkada orders, MacArthur Highway, and the late-afternoon-to-evening rhythm.

## 50-source research set

### Direct AI-sameness and AI-slop discussion

1. The New Yorker — The A.I.-Design Aesthetic That's Taking Over the Internet  
   https://www.newyorker.com/culture/infinite-scroll/the-ai-design-aesthetic-thats-taking-over-the-internet
2. Business Insider — Telltale signs of AI-made app design  
   https://www.businessinsider.com/ai-coded-app-user-interface-experience-design-2026-7
3. Creative Bloq — Everything looks the same. Now what?  
   https://www.creativebloq.com/ai/everything-looks-the-same-now-what
4. Vogue Business — The Anti-AI Slop Playbook  
   https://www.vogue.com/article/the-anti-ai-slop-playbook
5. Paul Bakaus — AI slop design tells and anti-patterns  
   https://www.linkedin.com/posts/paulbakaus_ai-slop-design-tells-design-anti-patterns-activity-7416272383017164800-10DR
6. 925 Studios — AI Slop Web Design guide  
   https://www.925studios.co/blog/ai-slop-web-design-guide
7. VibeCodeKit — Why AI-generated UI looks generic  
   https://vibecodekit.dev/ai-slop-design
8. Alex Lavaee — Why my AI-generated UI looked generic  
   https://alexlavaee.me/blog/lessons-learned-designing-with-ai/
9. Superdesign — Designing better UI with Claude Code  
   https://superdesign.dev/blog/claude-code-ui-design
10. MindStudio — Avoiding AI slop with a design system  
   https://www.mindstudio.ai/blog/claude-design-avoid-ai-slop-design-system/
11. Tony Lee — Skills that fix AI slop design  
   https://tonylee.im/en/blog/12-free-skills-escape-ai-slop-design/
12. Medium Design Bootcamp — Why AI-generated UI looks generic  
   https://medium.com/design-bootcamp/prompting-ai-like-a-designer-why-most-ai-generated-ui-designs-look-generic-945eccd35b7f
13. Reddit r/vibecoding — Making AI-generated frontends less generic  
   https://www.reddit.com/r/vibecoding/comments/1oy2f95/how_do_i_make_an_aigenerated_frontend_not_look/
14. Reddit r/ClaudeCode — UI that does not look AI-generated  
   https://www.reddit.com/r/ClaudeCode/comments/1rfjovy/how_do_you_create_ui_designs_that_dont_look/
15. Reddit r/vibecoding — AI websites and designs looking the same  
   https://www.reddit.com/r/vibecoding/comments/1rr0dwy/all_ai_websites_and_designs_look_the_same_has/
16. Wired — When Websites Design Themselves  
   https://www.wired.com/story/when-websites-design-themselves
17. arXiv — Combating “Sameness” in AI Art  
   https://arxiv.org/abs/2311.17080
18. arXiv — Rethinking the UI of GenUI  
   https://arxiv.org/abs/2606.13843
19. arXiv — On AI-Inspired UI-Design  
   https://arxiv.org/abs/2406.13631
20. arXiv — Design Principles for Generative AI Applications  
   https://arxiv.org/abs/2401.14484

### Visual hierarchy, usability, and content specificity

21. Nielsen Norman Group — Visual Hierarchy in UX  
   https://www.nngroup.com/articles/visual-hierarchy-ux-definition/
22. Nielsen Norman Group — Homepage Design Principles  
   https://www.nngroup.com/articles/homepage-design-principles/
23. Nielsen Norman Group — Good Visual Design, Explained  
   https://www.nngroup.com/articles/good-visual-design/
24. Nielsen Norman Group — Visual Design Cheat Sheet  
   https://www.nngroup.com/articles/visual-design-cheat-sheet/
25. Nielsen Norman Group — Principles of Visual Design  
   https://www.nngroup.com/articles/principles-visual-design/
26. Nielsen Norman Group — Aesthetic and Minimalist Design  
   https://www.nngroup.com/articles/aesthetic-minimalist-design/
27. Nielsen Norman Group — Why Does a Design Look Good?  
   https://www.nngroup.com/articles/why-does-design-look-good/
28. Nielsen Norman Group — Vague Prompts and Prototyping  
   https://www.nngroup.com/articles/vague-prototyping/
29. Smashing Magazine — Bringing Personality Back to the Web  
   https://www.smashingmagazine.com/2018/06/bringing-personality-back-to-the-web/
30. Smashing Magazine — A Comprehensive Guide to Web Design  
   https://www.smashingmagazine.com/2017/11/comprehensive-guide-web-design/
31. Smashing Magazine — Designing for Gen Z  
   https://www.smashingmagazine.com/2024/10/designing-for-gen-z/
32. Smashing Magazine — Designing Efficient Web Forms  
   https://www.smashingmagazine.com/2017/06/designing-efficient-web-forms/
33. Smashing Magazine — Best Practices in Modern Web Design  
   https://www.smashingmagazine.com/2010/03/best-practices-in-modern-web-design-the-ultimate-round-up/
34. Toptal — Principles of Design  
   https://www.toptal.com/designers/ui/principles-of-design
35. Canva — Web Design Principles  
   https://www.canva.com/learn/20-web-design-principles-follow/
36. Tilda Education — Popular Web Design Styles  
   https://tilda.education/en/web-design-styles

### Editorial layout, imagery, and authenticity

37. Tubik Studio — Editorial Website Design  
   https://tubikstudio.com/blog/media-editorial-website-design/
38. UX Collective — Defining Website Imagery  
   https://uxdesign.cc/ux-considerations-when-defining-your-website-imagery-2055bda527ef
39. UX Tigers / Jakob Nielsen — Photos Improve Website Usability and Credibility  
   https://www.uxtigers.com/post/photography
40. LogRocket — Design Imagery in UX  
   https://blog.logrocket.com/ux-design/design-imagery-ux/
41. Journal study — The Role of Photography in Web Design  
   https://journals.ekb.eg/article_401643.html
42. Architectural Digest — How to Create a Successful Design Website  
   https://www.architecturaldigest.com/story/how-to-create-a-successful-interior-design-website
43. Awwwards — Food & Drink Websites  
   https://www.awwwards.com/websites/food-drink/
44. Awwwards — Hotel & Restaurant Websites  
   https://www.awwwards.com/websites/hotel-restaurant/
45. Awwwards — Restaurant and Catering Website Inspiration  
   https://www.awwwards.com/tasty-design-restaurant-and-catering-websites.html
46. Awwwards — Menu Inspiration  
   https://www.awwwards.com/awwwards/collections/menu/
47. Awwwards — Winning Websites  
   https://www.awwwards.com/websites/

### Motion and practical interaction quality

48. Smashing Magazine — Integrating Motion Design into UX Workflow  
   https://www.smashingmagazine.com/2016/03/integrate-motion-design-animation-ux-workflow/
49. Smashing Magazine — User-Centered Web Design for Mobile Devices  
   https://www.smashingmagazine.com/2011/05/a-user-centered-approach-to-web-design-for-mobile-devices/
50. W3C Web Accessibility Initiative — Understanding Animation from Interactions  
   https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html

## Business and content verification sources

- Official Facebook page: https://www.facebook.com/p/Elyus-Food-Park-100094228879511/
- Public Facebook photo index: https://www.facebook.com/100094228879511/photos/
- Turista Boy venue feature and photograph: https://turistaboy.com/la-union-things-to-see-and-do/
- Wanderlog public listing: https://wanderlog.com/place/details/9089397/elyus-food-park
- Elyu Sisig public menu: https://www.foodpanda.ph/restaurant/i9d3/elyu-sisig-elyus-foodpark
- Sugar Cafe public menu: https://www.foodpanda.ph/restaurant/rinf/sugar-cafe-elyu-food-park
- GM's Shawarma Station public menu: https://www.foodpanda.ph/restaurant/et46/gms-shawarma-station
