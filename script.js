// Trial Preparation Website - Avada Theme Concept
// Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initializeAIAssistant();
    initializeExhibitSearch();
    initializeNotifications();
    
    // Add event listeners for dashboard widgets
    setupWidgetControls();
});

// AI Assistant functionality
function initializeAIAssistant() {
    const aiSearchInput = document.querySelector('.ai-search input');
    const aiSearchButton = document.querySelector('.ai-search button');
    
    if (aiSearchInput && aiSearchButton) {
        aiSearchButton.addEventListener('click', function() {
            const query = aiSearchInput.value.trim();
            if (query) {
                // Simulate AI search functionality
                console.log('AI search query:', query);
                
                // In a real implementation, this would call an API
                simulateAIResponse(query);
            }
        });
        
        aiSearchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                aiSearchButton.click();
            }
        });
    }
}

// Simulate AI response for demonstration purposes
function simulateAIResponse(query) {
    const lowerQuery = query.toLowerCase();
    let response = '';
    
    // Simple pattern matching for demo purposes
    if (lowerQuery.includes('bank') && lowerQuery.includes('separation')) {
        response = 'The Bank of America statement showing the balance on the date of separation (February 28, 2023) is Exhibit 1. The balance was $24,567.89.';
    } else if (lowerQuery.includes('home') && lowerQuery.includes('value') || lowerQuery.includes('appraisal')) {
        response = 'According to the home appraisal report (Exhibit 3), the value of the home is $750,000 as of March 1, 2024.';
    } else if (lowerQuery.includes('witness') || lowerQuery.includes('expert')) {
        response = 'There are 4 witnesses scheduled: Dr. James Wilson (Financial Analyst), Sarah Johnson (CPA), Robert Thomas (Character Witness), and Dr. Lisa Chen (Child Psychologist).';
    } else if (lowerQuery.includes('down payment') || lowerQuery.includes('house payment')) {
        response = 'The down payment on the home is mentioned in Exhibits 3, 7, and 12. The amount was $150,000 paid on April 15, 2015.';
    } else {
        response = 'I don\'t have specific information about that. Try refining your question or check the exhibits directly.';
    }
    
    // Display the response in a modal
    showAIResponseModal(response);
}

// Show AI response in a modal
function showAIResponseModal(response) {
    // Create modal elements
    const modalBackdrop = document.createElement('div');
    modalBackdrop.className = 'modal-backdrop';
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';
    
    const modalTitle = document.createElement('h3');
    modalTitle.className = 'modal-title';
    modalTitle.textContent = 'AI Assistant Response';
    
    const modalClose = document.createElement('button');
    modalClose.className = 'modal-close';
    modalClose.innerHTML = '&times;';
    
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';
    modalBody.innerHTML = `<p>${response}</p>`;
    
    const modalFooter = document.createElement('div');
    modalFooter.className = 'modal-footer';
    
    const closeButton = document.createElement('button');
    closeButton.className = 'btn';
    closeButton.textContent = 'Close';
    
    // Assemble modal
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(modalClose);
    
    modalFooter.appendChild(closeButton);
    
    modal.appendChild(modalHeader);
    modal.appendChild(modalBody);
    modal.appendChild(modalFooter);
    
    modalBackdrop.appendChild(modal);
    
    // Add to document
    document.body.appendChild(modalBackdrop);
    
    // Add event listeners for closing
    modalClose.addEventListener('click', function() {
        document.body.removeChild(modalBackdrop);
    });
    
    closeButton.addEventListener('click', function() {
        document.body.removeChild(modalBackdrop);
    });
    
    modalBackdrop.addEventListener('click', function(e) {
        if (e.target === modalBackdrop) {
            document.body.removeChild(modalBackdrop);
        }
    });
}

// Exhibit search functionality
function initializeExhibitSearch() {
    // This would be implemented for the exhibits page
    console.log('Exhibit search initialized');
}

// Notification system
function initializeNotifications() {
    const notificationBell = document.querySelector('.notifications');
    
    if (notificationBell) {
        notificationBell.addEventListener('click', function() {
            // Show notifications panel
            showNotificationsPanel();
        });
    }
}

// Show notifications panel
function showNotificationsPanel() {
    // Sample notifications
    const notifications = [
        {
            title: 'Witness Confirmed',
            message: 'Dr. James Wilson has confirmed availability for April 16, 2025.',
            time: '10 minutes ago',
            read: false
        },
        {
            title: 'New Document Added',
            message: 'Exhibit 5 - Business Valuation Report has been uploaded.',
            time: '1 hour ago',
            read: false
        },
        {
            title: 'Calendar Update',
            message: 'Pretrial conference has been rescheduled to March 22, 2025.',
            time: '3 hours ago',
            read: false
        }
    ];
    
    // Create notifications panel
    const panel = document.createElement('div');
    panel.className = 'notifications-panel';
    
    const panelHeader = document.createElement('div');
    panelHeader.className = 'notifications-header';
    panelHeader.innerHTML = '<h3>Notifications</h3><button class="mark-all-read">Mark All Read</button>';
    
    const panelBody = document.createElement('div');
    panelBody.className = 'notifications-body';
    
    // Add notifications to panel
    notifications.forEach(notification => {
        const notificationItem = document.createElement('div');
        notificationItem.className = 'notification-item' + (notification.read ? ' read' : '');
        
        notificationItem.innerHTML = `
            <div class="notification-title">${notification.title}</div>
            <div class="notification-message">${notification.message}</div>
            <div class="notification-time">${notification.time}</div>
        `;
        
        panelBody.appendChild(notificationItem);
    });
    
    panel.appendChild(panelHeader);
    panel.appendChild(panelBody);
    
    // Position the panel
    const notificationBell = document.querySelector('.notifications');
    const rect = notificationBell.getBoundingClientRect();
    
    panel.style.position = 'absolute';
    panel.style.top = (rect.bottom + window.scrollY) + 'px';
    panel.style.right = (window.innerWidth - rect.right) + 'px';
    panel.style.width = '300px';
    panel.style.maxHeight = '400px';
    panel.style.overflowY = 'auto';
    panel.style.backgroundColor = 'white';
    panel.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    panel.style.borderRadius = '4px';
    panel.style.zIndex = '1000';
    
    // Add to document
    document.body.appendChild(panel);
    
    // Close when clicking outside
    document.addEventListener('click', function closePanel(e) {
        if (!panel.contains(e.target) && !notificationBell.contains(e.target)) {
            document.body.removeChild(panel);
            document.removeEventListener('click', closePanel);
        }
    });
    
    // Mark all as read
    const markAllReadButton = panel.querySelector('.mark-all-read');
    markAllReadButton.addEventListener('click', function() {
        const notificationItems = panel.querySelectorAll('.notification-item');
        notificationItems.forEach(item => {
            item.classList.add('read');
        });
        
        // Update notification badge
        const badge = document.querySelector('.notifications .badge');
        if (badge) {
            badge.style.display = 'none';
        }
    });
}

// Widget controls (expand, collapse, refresh)
function setupWidgetControls() {
    const widgets = document.querySelectorAll('.widget');
    
    widgets.forEach(widget => {
        const expandButton = widget.querySelector('.widget-actions button:nth-child(2)');
        if (expandButton) {
            expandButton.addEventListener('click', function() {
                // Toggle expanded state
                widget.classList.toggle('expanded');
                
                if (widget.classList.contains('expanded')) {
                    // Save original position
                    widget.dataset.originalIndex = Array.from(widget.parentNode.children).indexOf(widget);
                    
                    // Create expanded view
                    const expandedWidget = document.createElement('div');
                    expandedWidget.className = 'expanded-widget-container';
                    expandedWidget.innerHTML = `
                        <div class="expanded-widget-backdrop"></div>
                        <div class="expanded-widget">
                            <div class="expanded-widget-header">
                                <h3>${widget.querySelector('.widget-title').textContent}</h3>
                                <button class="close-expanded">&times;</button>
                            </div>
                            <div class="expanded-widget-body">
                                ${widget.querySelector('.widget-content').innerHTML}
                            </div>
                        </div>
                    `;
                    
                    // Style the expanded container
                    expandedWidget.style.position = 'fixed';
                    expandedWidget.style.top = '0';
                    expandedWidget.style.left = '0';
                    expandedWidget.style.width = '100%';
                    expandedWidget.style.height = '100%';
                    expandedWidget.style.display = 'flex';
                    expandedWidget.style.justifyContent = 'center';
                    expandedWidget.style.alignItems = 'center';
                    expandedWidget.style.zIndex = '1000';
                    
                    // Style the backdrop
                    const backdrop = expandedWidget.querySelector('.expanded-widget-backdrop');
                    backdrop.style.position = 'absolute';
                    backdrop.style.top = '0';
                    backdrop.style.left = '0';
                    backdrop.style.width = '100%';
                    backdrop.style.height = '100%';
                    backdrop.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                    
                    // Style the expanded widget
                    const expandedWidgetContent = expandedWidget.querySelector('.expanded-widget');
                    expandedWidgetContent.style.position = 'relative';
                    expandedWidgetContent.style.width = '80%';
                    expandedWidgetContent.style.maxWidth = '1000px';
                    expandedWidgetContent.style.maxHeight = '80%';
                    expandedWidgetContent.style.backgroundColor = 'white';
                    expandedWidgetContent.style.borderRadius = '5px';
                    expandedWidgetContent.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
                    expandedWidgetContent.style.overflow = 'auto';
                    
                    // Style the header
                    const header = expandedWidgetContent.querySelector('.expanded-widget-header');
                    header.style.display = 'flex';
                    header.style.justifyContent = 'space-between';
                    header.style.alignItems = 'center';
                    header.style.padding = '15px 20px';
                    header.style.borderBottom = '1px solid #ddd';
                    
                    // Style the close button
                    const closeButton = header.querySelector('.close-expanded');
                    closeButton.style.background = 'none';
                    closeButton.style.border = 'none';
                    closeButton.style.fontSize = '1.5rem';
                    closeButton.style.cursor = 'pointer';
                    closeButton.style.color = '#666';
                    
                    // Style the body
                    const body = expandedWidgetContent.querySelector('.expanded-widget-body');
                    body.style.padding = '20px';
                    
                    // Add to document
                    document.body.appendChild(expandedWidget);
                    
                    // Add event listener to close
                    closeButton.addEventListener('click', function() {
                        document.body.removeChild(expandedWidget);
                        widget.classList.remove('expanded');
                    });
                    
                    backdrop.addEventListener('click', function() {
                        document.body.removeChild(expandedWidget);
                        widget.classList.remove('expanded');
                    });
                }
            });
        }
        
        // Refresh button
        const refreshButton = widget.querySelector('.widget-actions button:nth-child(1)');
        if (refreshButton && refreshButton.innerHTML.includes('fa-sync-alt')) {
            refreshButton.addEventListener('click', function() {
                // Add refresh animation
                refreshButton.classList.add('rotating');
                
                // Simulate refresh delay
                setTimeout(function() {
                    refreshButton.classList.remove('rotating');
                }, 1000);
            });
        }
    });
}

// Add CSS for notifications panel and expanded widgets
function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .notifications-panel {
            padding: 0;
            border: 1px solid #ddd;
        }
        
        .notifications-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 15px;
            background-color: #f5f5f5;
            border-bottom: 1px solid #ddd;
        }
        
        .notifications-header h3 {
            margin: 0;
            font-size: 1rem;
        }
        
        .mark-all-read {
            background: none;
            border: none;
            color: #336699;
            cursor: pointer;
            font-size: 0.8rem;
        }
        
        .notifications-body {
            max-height: 350px;
            overflow-y: auto;
        }
        
        .notification-item {
            padding: 10px 15px;
            border-bottom: 1px solid #eee;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        
        .notification-item:hover {
            background-color: #f9f9f9;
        }
        
        .notification-item.read {
            opacity: 0.7;
        }
        
        .notification-title {
            font-weight: bold;
            margin-bottom: 5px;
        }
        
        .notification-message {
            font-size: 0.9rem;
            margin-bottom: 5px;
        }
        
        .notification-time {
            font-size: 0.8rem;
            color: #666;
        }
        
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        .rotat<response clipped><NOTE>To save on context only part of this file has been shown to you. You should retry this tool after you have searched inside the file with `grep -n` in order to find the line numbers of what you are looking for.</NOTE>