
        // Custom tooltip functionality
        document.addEventListener('DOMContentLoaded', function() {
            const tooltipElements = document.querySelectorAll('[title]');
            
            tooltipElements.forEach(element => {
                element.addEventListener('mouseenter', function() {
                    const tooltip = document.createElement('div');
                    tooltip.className = 'tooltip-popup';
                    tooltip.textContent = this.getAttribute('title');
                    tooltip.style.position = 'absolute';
                    tooltip.style.backgroundColor = '#333';
                    tooltip.style.color = '#fff';
                    tooltip.style.padding = '5px 10px';
                    tooltip.style.borderRadius = '4px';
                    tooltip.style.fontSize = '14px';
                    tooltip.style.zIndex = '9999';
                    tooltip.style.maxWidth = '250px';
                    document.body.appendChild(tooltip);
                    
                    const rect = this.getBoundingClientRect();
                    tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
                    tooltip.style.left = (rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2)) + 'px';
                    
                    this.addEventListener('mouseleave', function() {
                        document.body.removeChild(tooltip);
                    }, { once: true });
                });
                
                // Prevent default title tooltip
                element.addEventListener('mouseenter', function() {
                    this.setAttribute('data-title', this.getAttribute('title'));
                    this.removeAttribute('title');
                });
                
                element.addEventListener('mouseleave', function() {
                    this.setAttribute('title', this.getAttribute('data-title'));
                });
            });
        });
