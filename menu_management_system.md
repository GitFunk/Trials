# Menu Management System

## Overview
This document outlines the design for a comprehensive menu management system that will allow attorneys to customize the navigation structure of their trial preparation website. This system will enable attorneys to add new pages and topics to the menu, creating a fully customizable information architecture tailored to each specific case.

## Menu Management Requirements

### Core Functionality
- Add custom pages and topics to the navigation menu
- Reorder menu items to prioritize important sections
- Create hierarchical menu structures with parent/child relationships
- Edit existing menu items
- Hide/show menu items based on case needs
- Set permissions for who can access each menu item
- Custom page content creation and management

### User-Specific Requirements
- **Attorneys**: Full control over menu structure and custom pages
- **Associates/Staff**: Limited menu management permissions based on attorney settings
- **Clients/Firm Members/Witnesses**: No menu management permissions, view-only access based on permissions

## Menu Management Architecture

### High-Level Architecture
```
┌─────────────────────────────────────────────────────────────┐
│                 Menu Management System                       │
├─────────────┬─────────────┬─────────────┬──────────────────┤
│  Menu       │  Custom     │ Page        │ Permission       │
│  Structure  │  Pages      │ Content     │ Control          │
└─────────────┴─────────────┴─────────────┴──────────────────┘
```

### Component Breakdown

#### Menu Structure Management
- Menu item creation and deletion
- Menu item reordering
- Hierarchical menu organization
- Menu item visibility control
- Menu style configuration
- Menu behavior settings

#### Custom Pages Management
- Custom page creation
- Page template selection
- Page layout configuration
- Content block management
- Page metadata management
- Page versioning

#### Page Content Management
- Rich text editing
- Media embedding
- Document linking
- Widget integration
- Dynamic content sections
- Content templates

#### Permission Control
- Page-level access control
- Role-based menu visibility
- User-specific menu customization
- Inherited permissions management
- Temporary access configuration
- Access audit logging

## Menu Management Interface

### Menu Structure Management Interface
```
┌─────────────────────────────────────────────────────────────┐
│ Menu Structure Management                                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ Menu Items                                                  │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ ▼ Home                                       [Edit]      │ │
│ │ ▼ Witnesses                                  [Edit]      │ │
│ │ │ └─ Expert Witnesses                        [Edit]      │ │
│ │ │ └─ Fact Witnesses                          [Edit]      │ │
│ │ ▼ Exhibits                                   [Edit]      │ │
│ │ ▼ Trial Scheduling                           [Edit]      │ │
│ │ ▼ Motions                                    [Edit]      │ │
│ │ ▼ Orders                                     [Edit]      │ │
│ │ ▼ Issues                                     [Edit]      │ │
│ │ │ └─ Parenting                               [Edit]      │ │
│ │ │ └─ Child Support                           [Edit]      │ │
│ │ │ └─ Spousal Support                         [Edit]      │ │
│ │ │ └─ Assets                                  [Edit]      │ │
│ │ │ └─ Debts                                   [Edit]      │ │
│ │ ▼ Settlement Negotiations                    [Edit]      │ │
│ │ ▼ Trial Strategy                             [Edit]      │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ Actions                                                     │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ [Add Custom Page] [Add Custom Link] [Add Separator]      │ │
│ │ [Move Up] [Move Down] [Make Child] [Make Parent]         │ │
│ │ [Hide Selected] [Show Selected] [Delete Selected]        │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ [Save Changes] [Preview] [Reset to Default]                 │
└─────────────────────────────────────────────────────────────┘
```

### Custom Page Creation Interface
```
┌─────────────────────────────────────────────────────────────┐
│ Create Custom Page                                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ Page Information                                            │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Page Title: [Expert Witness Analysis                   ] │ │
│ │ Menu Label: [Expert Witnesses                          ] │ │
│ │ Parent Menu: [Witnesses ▼]                               │ │
│ │ Icon: [Select Icon ▼] [Preview]                          │ │
│ │ Position: [End of List ▼]                                │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ Page Template                                               │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ (•) Standard Page                                        │ │
│ │ ( ) Document List                                        │ │
│ │ ( ) Calendar View                                        │ │
│ │ ( ) Dashboard                                            │ │
│ │ ( ) Notes Page                                           │ │
│ │ ( ) Blank Page                                           │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ Access Permissions                                          │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ [✓] Attorneys                                            │ │
│ │ [✓] Associates                                           │ │
│ │ [✓] Staff                                                │ │
│ │ [ ] Clients                                              │ │
│ │ [ ] Witnesses                                            │ │
│ │ [ ] Public                                               │ │
│ │                                                         │ │
│ │ [Advanced Permissions]                                   │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ [Create Page] [Create and Edit Content] [Cancel]            │
└─────────────────────────────────────────────────────────────┘
```

### Page Content Editor Interface
```
┌─────────────────────────────────────────────────────────────┐
│ Edit Page: Expert Witness Analysis                           │
├─────────────────────────────────────────────────────────────┤
│ ┌─────────────────────┐                                     │
│ │ Toolbar             │                                     │
│ │ [B] [I] [U] [A] [¶] │                                     │
│ │ [H1] [H2] [H3] [--] │                                     │
│ │ [Link] [Image] [Doc]│                                     │
│ │ [Table] [List] [+]  │                                     │
│ └─────────────────────┘                                     │
│                                                             │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ # Expert Witness Analysis                                │ │
│ │                                                         │ │
│ │ This page contains analysis and preparation materials    │ │
│ │ for expert witnesses in the Smith v. Smith case.         │ │
│ │                                                         │ │
│ │ ## Witness List                                          │ │
│ │                                                         │ │
│ │ 1. Dr. James Wilson - Financial Analyst                  │ │
│ │ 2. Sarah Johnson, CPA - Business Valuation               │ │
│ │ 3. Dr. Robert Thomas - Child Psychology                  │ │
│ │                                                         │ │
│ │ [Add Content Block]                                      │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ Content Blocks                                              │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ [+] Text Block                                           │ │
│ │ [+] Document List                                        │ │
│ │ [+] Image Gallery                                        │ │
│ │ [+] Table                                                │ │
│ │ [+] Timeline                                             │ │
│ │ [+] Contact List                                         │ │
│ │ [+] Notes Section                                        │ │
│ │ [+] AI Analysis                                          │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ [Save] [Preview] [Publish] [Cancel]                         │
└─────────────────────────────────────────────────────────────┘
```

### Menu Item Edit Interface
```
┌─────────────────────────────────────────────────────────────┐
│ Edit Menu Item: Expert Witnesses                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ Menu Item Properties                                        │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Label: [Expert Witnesses                              ] │ │
│ │ Type: [Custom Page ▼]                                   │ │
│ │ Target: [Expert Witness Analysis ▼]                     │ │
│ │ Icon: [Select Icon ▼] [Preview]                          │ │
│ │ Parent: [Witnesses ▼]                                    │ │
│ │ Position: [2 ▼]                                          │ │
│ │ Visibility: [✓] Visible in Menu                          │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ Advanced Options                                            │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ CSS Class: [                                           ] │ │
│ │ ID: [expert-witnesses                                  ] │ │
│ │ Open in: (•) Same Window  ( ) New Tab                    │ │
│ │ Tooltip: [Expert witness information and preparation   ] │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ Access Permissions                                          │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ [✓] Attorneys                                            │ │
│ │ [✓] Associates                                           │ │
│ │ [✓] Staff                                                │ │
│ │ [ ] Clients                                              │ │
│ │ [ ] Witnesses                                            │ │
│ │ [ ] Public                                               │ │
│ │                                                         │ │
│ │ [Advanced Permissions]                                   │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ [Save Changes] [Delete Item] [Cancel]                       │
└─────────────────────────────────────────────────────────────┘
```

## Custom Page Types

### Standard Page
- Rich text content
- Document embedding
- Media integration
- Custom sections
- Notes and comments

### Document List
- Filterable document grid
- Document preview
- Batch operations
- Custom metadata columns
- Sorting and grouping

### Calendar View
- Event timeline
- Appointment scheduling
- Deadline tracking
- Resource allocation
- Filter by event type

### Dashboard
- Customizable widgets
- Data visualization
- Status indicators
- Recent activity
- Quick links

### Notes Page
- Collaborative note-taking
- Version history
- AI-assisted formatting
- Tag and categorization
- Search and filtering

### Blank Page
- No predefined structure
- Complete layout freedom
- Custom HTML/CSS support
- Widget placement
- JavaScript integration

## Menu Structure Types

### Standard Menu Items
- Link to system pages
- Link to custom pages
- Link to external URLs
- Link to documents
- Link to specific views

### Dropdown Menus
- Parent menu items
- Child menu items
- Multi-level nesting
- Collapsible sections
- Group related items

### Dynamic Menu Items
- Case phase-dependent items
- Role-specific menu items
- Conditional visibility
- Context-sensitive options
- Temporary items

## Technical Implementation

### Database Schema
```
MenuItems
- menu_item_id (PK)
- case_id (FK)
- parent_id (FK, self-referential)
- label
- type (system_page, custom_page, external_link, document, separator)
- target
- icon
- position
- is_visible
- css_class
- html_id
- open_in_new_tab
- tooltip
- created_by
- created_at
- updated_at

CustomPages
- page_id (PK)
- case_id (FK)
- title
- slug
- template_type
- content (JSON)
- meta_description
- meta_keywords
- version
- status (draft, published)
- created_by
- created_at
- updated_at

PagePermissions
- permission_id (PK)
- page_id (FK)
- role_id (FK)
- user_id (FK, optional)
- can_view
- can_edit
- created_by
- created_at
- updated_at

PageVersions
- version_id (PK)
- page_id (FK)
- content (JSON)
- version_number
- created_by
- created_at
- change_notes

ContentBlocks
- block_id (PK)
- page_id (FK)
- block_type
- content (JSON)
- position
- is_visible
- created_by
- created_at
- updated_at
```

### API Endpoints
- `/api/menu` - Menu structure management
- `/api/menu/items` - Menu item CRUD operations
- `/api/pages` - Custom page management
- `/api/pages/content` - Page content management
- `/api/pages/permissions` - Page permission management
- `/api/pages/versions` - Page version management

### Implementation Technologies
- React components for menu management interface
- Next.js API routes for backend functionality
- React DnD for drag-and-drop menu organization
- TipTap or Slate.js for rich text editing
- React Context for menu state management
- Server components for dynamic menu rendering

## Responsive Design Considerations

### Desktop Experience
- Full menu management interface
- Drag-and-drop menu organization
- Advanced page editor
- Multi-level menu preview
- Detailed permission controls

### Tablet Experience
- Simplified menu management
- Touch-friendly controls
- Basic page editor
- Two-level menu preview
- Essential permission controls

### Mobile Experience
- List-based menu management
- Tap-to-edit functionality
- Simplified content editor
- Single-level menu preview
- Basic permission toggles

## User Experience Enhancements

### Attorney Experience
- Quick page creation from templates
- Menu structure templates for common case types
- Drag-and-drop menu organization
- Bulk operations for menu items
- Preview menu on different devices

### Client Experience
- Personalized navigation based on relevance
- Simplified menu structure
- Focus on case-relevant information
- Consistent navigation across devices
- Intuitive access to important documents

## Implementation Roadmap

### Phase 1: Basic Menu Management
- Implement menu item creation and editing
- Create menu structure management
- Develop basic custom page creation
- Build permission system foundation

### Phase 2: Custom Page Development
- Implement page templates
- Create content block system
- Develop rich text editor
- Build media integration

### Phase 3: Advanced Features
- Implement hierarchical menu structure
- Create dynamic menu items
- Develop advanced permissions
- Build version control for pages

### Phase 4: Integration
- Integrate with document management system
- Create AI-assisted content suggestions
- Develop analytics for page usage
- Build export/import functionality

## Testing Strategy

### Functional Testing
- Menu creation and editing
- Custom page management
- Permission enforcement
- Content editing capabilities

### Usability Testing
- Menu organization workflow
- Page creation process
- Content editing experience
- Permission management clarity

### Performance Testing
- Menu rendering speed
- Page load times
- Editor responsiveness
- Large menu structure handling

## Conclusion
This menu management system design provides a comprehensive framework for attorneys to customize the navigation structure of their trial preparation website. The system balances powerful customization capabilities with ease of use, ensuring attorneys can create tailored information architectures for each case while maintaining a consistent and intuitive user experience across all devices.
