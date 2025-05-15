 # Project Rules and Guidelines

 Strictly Follow these rules while making changes or writing code.

## 1. Project Structure
```
project-root/
├── src/                    # Source code
│   ├── css/               # CSS files
│   ├── js/                # JavaScript files
│   ├── public/            # Static assets
│   ├── [page-name]/       # Individual page directories
│   └── index.html         # Main entry point
├── content/               # Content management
│   ├── common.json        # Shared content
│   ├── pages.json         # Page-specific content added in page specific block using URI
│   └── languages.json     # Language configuration
├── partials/              # Reusable components of handlebars js 
└── config files           # Various configuration files
```

## 2. File Naming Conventions
- Use snake vase for file names and kebab-case directory names
- Page directories should match their route name
- Component files should be prefixed with their type (e.g., `home_header`, `home_footer` for home page specific header and footer content). Files are already created for each page and common pages like header, footer, head, foot etc. have been created.
- JSON files should use descriptive names

## 3. Content Management Rules
- All text content should be in JSON files under `content/`
- Common content goes in `common.json` i.e. content that will be shared accross multiple pages
- Page-specific content goes in `pages.json`
- Never hardcode text content in HTML files and use handlebars js to show content. Make sure to use if to check if content exists and show it where applicable.
- In partials/pages directory there is a main file for each page that will contain the html of the page i.e. home.html for homepage, about.html for about etc. HTML sould be added there for the respective page.
- in the src directory main routing pages are added and for each page related handlebars js components and main page are added. So do not add html directly to these pages and only write html in related components and main pages in the partials directory.
- Data from json files is shared using vite js config so check it to understand how data is passed to the template/files.
- Do not write direct html in the index html files in the src directory and keep the partials already added there and only write html in the partials defined.

## 4. Component Guidelines
- Components should be reusable and self-contained
- Place components in the `partials/components` directory
- Components should accept data through Handlebars context
- Keep components focused on a single responsibility

## 5. Styling Rules
- Use Tailwind CSS for styling
- page specific styles should be added in page header component i.e. for home page if custom styles are added they should go in `partials/components/home_header.html`
- Follow mobile-first approach
- Use CSS variables for theme colors and add them in the app.css file so that they can be changed easily
- Always use tailwindcss classes and write custom css when it is extremly necessary.

## 6. JavaScript Guidelines
- Use ES modules
- page specific scripts should be added in page footer component i.e. for home page if custom scripts are added they should go in `partials/components/home_footer.html`, same goes for other files
- Keep JavaScript files modular
- Use async/await for asynchronous operations
- Follow functional programming principles
- As alpinejs is already added in the project, use alpinejs where required.

## 7. Asset Management
- Static assets go in `src/public/`
- Optimize images before adding
- Use appropriate file formats
- Keep file sizes minimal


## 9. Performance Guidelines
- Optimize images and assets
- Minimize HTTP requests
- Use lazy loading where appropriate
- Implement proper caching strategies

## 10. Accessibility Standards
- Follow WCAG 2.1 guidelines
- Use semantic HTML
- Ensure proper color contrast
- Include alt text for images
- Make interactive elements keyboard accessible

## 11. SEO Best Practices
- Use proper meta tags (tags are already added in the head.html inside partials/components directory. Data is added based on current page data using handlebar js)
- Implement structured data where applicable. If adding page spacific structured data it should go to its specific header file i.e. for home page it should be in home_header.html file in the partials/components directory
- Create semantic URLs
- Ensure mobile responsiveness