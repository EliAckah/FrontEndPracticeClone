export function rulesElement() {
    const rulesContainer = document.querySelector('.js-rules');

    if (rulesContainer) {
        document.querySelector('.js-viewall').addEventListener('click', () => {
            rulesContainer.innerHTML = '<div>There are no rules with these projects. Use any languages, libraries, or frameworks you want to recreate and learn from them.</div>';
        });

        document.querySelector('.js-level1').addEventListener('click', () => {
            rulesContainer.innerHTML = '<div style="background-color: var(--level1-color); width:400px; margin: 0 auto">A great place to start learning about layouts, animations, color choices, and more.</div>';
        });

        document.querySelector('.js-level2').addEventListener('click', () => {
            rulesContainer.innerHTML = '<div style="background-color: var(--level2-color);">A wonderful variety of projects with well-designed layouts, interactive elements, hover effects, and animations.</div>';
        });

        document.querySelector('.js-level3').addEventListener('click', () => {
            rulesContainer.innerHTML = '<div style="background-color: var(--level3-color);">Test and push your skills even further with these complex layouts, animations, and interactive elements.</div>';
        });
    }

}

