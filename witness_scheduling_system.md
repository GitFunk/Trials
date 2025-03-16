# Witness Scheduling and Calendar System Design

## Overview
This document outlines the design for a comprehensive witness scheduling and calendar system for the trial preparation website. The system will provide attorneys with tools to manage witness availability while giving witnesses limited access to select available time slots.

## System Requirements

### Core Functionality
- Attorney-controlled calendar management
- Secure witness access to availability information
- Dynamic schedule adjustment during trial
- Integration with external calendar systems
- Mobile-responsive design for all users
- Notification system for schedule changes

### User-Specific Requirements
- **Attorneys**: Full control over calendar, ability to block/open time slots
- **Associates/Staff**: Customizable calendar management permissions
- **Witnesses**: Limited access to view and select from available time slots
- **Clients**: View-only access to overall trial schedule
- **Firm Members**: View-only access to overall trial schedule

## Calendar System Architecture

### High-Level Architecture
```
┌─────────────────────────────────────────────────────────────┐
│                 Witness Scheduling System                    │
├─────────────┬─────────────┬─────────────┬──────────────────┤
│  Calendar   │  Scheduling │ Notification │ External         │
│  Management │  Portal     │ System      │ Integrations     │
└─────────────┴─────────────┴─────────────┴──────────────────┘
```

### Component Breakdown

#### Calendar Management
- Master trial calendar
- Attorney scheduling interface
- Time slot management
- Resource allocation
- Schedule conflict detection

#### Scheduling Portal
- Attorney view (full control)
- Witness view (limited access)
- Availability selection interface
- Confirmation system
- Mobile-optimized interface

#### Notification System
- Email notifications
- SMS alerts (optional)
- In-app notifications
- Reminder system
- Schedule change alerts

#### External Integrations
- Microsoft 365 Calendar
- Google Calendar
- iCalendar format support
- Export/import functionality

## User Flows

### Attorney Calendar Management Flow
```
┌─────────────┐     ┌─────────────────┐     ┌───────────────────┐
│  Calendar   │────▶│ Define Available │────▶│ Assign Witnesses  │
│  Dashboard  │     │ Time Slots      │     │ to Time Slots     │
└─────────────┘     └─────────────────┘     └───────────────────┘
                                                     │
                                                     ▼
                                            ┌───────────────────┐
                                            │ Send Availability │
                                            │ to Witnesses      │
                                            └───────────────────┘
                                                     │
                                                     ▼
                                            ┌───────────────────┐
                                            │ Monitor & Adjust  │
                                            │ Schedule          │
                                            └───────────────────┘
```

### Witness Scheduling Flow
```
┌─────────────┐     ┌─────────────────┐     ┌───────────────────┐
│  Witness    │────▶│ View Available  │────▶│ Select Preferred  │
│  Portal     │     │ Time Slots      │     │ Time Slots        │
└─────────────┘     └─────────────────┘     └───────────────────┘
                                                     │
                                                     ▼
                                            ┌───────────────────┐
                                            │ Receive           │
                                            │ Confirmation      │
                                            └───────────────────┘
                                                     │
                                                     ▼
                                            ┌───────────────────┐
                                            │ Receive Updates   │
                                            │ & Reminders       │
                                            └───────────────────┘
```

## Calendar Interface Design

### Attorney Calendar View
```
┌─────────────────────────────────────────────────────────────┐
│ Trial Calendar                                     [Month ▼] │
├─────────────────────────────────────────────────────────────┤
│ ┌─────────┬─────────┬─────────┬─────────┬─────────┬───────┐ │
│ │ Sunday  │ Monday  │ Tuesday │Wednesday│Thursday │ Friday │ │
│ ├─────────┼─────────┼─────────┼─────────┼─────────┼───────┤ │
│ │         │         │         │         │         │       │ │
│ │         │ 9:00 AM │ 9:00 AM │ 9:00 AM │ 9:00 AM │9:00 AM│ │
│ │         │ Court   │ Witness │ Court   │ Witness │Court  │ │
│ │         │ Session │ Prep    │ Session │ Prep    │Session│ │
│ │         │         │         │         │         │       │ │
│ │         │ 1:00 PM │ 1:00 PM │ 1:00 PM │ 1:00 PM │1:00 PM│ │
│ │         │ Witness │ Court   │ Witness │ Court   │Witness│ │
│ │         │ Prep    │ Session │ Prep    │ Session │Prep   │ │
│ │         │         │         │         │         │       │ │
│ └─────────┴─────────┴─────────┴─────────┴─────────┴───────┘ │
│                                                             │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Witness Schedule                                         │ │
│ ├─────────────────────────────────────────────────────────┤ │
│ │ ● John Smith - Monday, 1:00 PM - 3:00 PM                │ │
│ │ ● Jane Doe - Wednesday, 1:00 PM - 4:00 PM               │ │
│ │ ● Robert Johnson - Friday, 1:00 PM - 2:30 PM            │ │
│ │ ● [+ Add Witness]                                        │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Actions                                                  │ │
│ ├─────────────────────────────────────────────────────────┤ │
│ │ [Block Time Slot] [Open Time Slot] [Notify Witnesses]    │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### Witness Portal View
```
┌─────────────────────────────────────────────────────────────┐
│ Witness Scheduling Portal                                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ Welcome, [Witness Name]                                     │
│                                                             │
│ Please select your availability from the options below:     │
│                                                             │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Available Time Slots                                     │ │
│ ├─────────────────────────────────────────────────────────┤ │
│ │ ○ Monday, March 17 - 1:00 PM to 3:00 PM                 │ │
│ │ ○ Wednesday, March 19 - 1:00 PM to 4:00 PM              │ │
│ │ ○ Friday, March 21 - 1:00 PM to 2:30 PM                 │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Your Selected Time:                                      │ │
│ ├─────────────────────────────────────────────────────────┤ │
│ │ Not yet selected                                         │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ [Submit Selection]                                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Mobile Calendar View (Attorney)
```
┌───────────────────────┐
│ Trial Calendar        │
│ [Week View ▼]         │
├───────────────────────┤
│ Monday, March 17      │
│ ┌─────────────────┐   │
│ │ 9:00 AM         │   │
│ │ Court Session    │   │
│ └─────────────────┘   │
│ ┌─────────────────┐   │
│ │ 1:00 PM         │   │
│ │ Witness: J. Smith│   │
│ └─────────────────┘   │
├───────────────────────┤
│ Tuesday, March 18     │
│ ┌─────────────────┐   │
│ │ 9:00 AM         │   │
│ │ Witness Prep     │   │
│ └─────────────────┘   │
│ ┌─────────────────┐   │
│ │ 1:00 PM         │   │
│ │ Court Session    │   │
│ └─────────────────┘   │
├───────────────────────┤
│ [+ More Days]         │
└───────────────────────┘
```

### Mobile Calendar View (Witness)
```
┌───────────────────────┐
│ Witness Scheduling    │
│                       │
├───────────────────────┤
│ Available Time Slots: │
│                       │
│ ○ Monday, March 17    │
│   1:00 PM - 3:00 PM   │
│                       │
│ ○ Wednesday, March 19 │
│   1:00 PM - 4:00 PM   │
│                       │
│ ○ Friday, March 21    │
│   1:00 PM - 2:30 PM   │
│                       │
├───────────────────────┤
│ [Submit Selection]    │
└───────────────────────┘
```

## Time Slot Management

### Time Slot States
- **Open**: Available for scheduling
- **Reserved**: Tentatively scheduled
- **Confirmed**: Finalized with witness
- **Blocked**: Unavailable for scheduling
- **Completed**: Past time slot
- **Canceled**: Previously scheduled but now canceled

### Time Slot Allocation
- Minimum time slot duration: 30 minutes
- Default time slot duration: 1 hour
- Custom time slot duration: Configurable by attorney
- Buffer time between witnesses: Configurable (default: 15 minutes)

### Conflict Resolution
- Automatic detection of scheduling conflicts
- Visual indicators for conflicting appointments
- Prioritization system for resolving conflicts
- Notification system for conflict resolution

## Notification System

### Notification Types
- **Invitation**: Initial request for witness to select availability
- **Confirmation**: Confirmation of scheduled time
- **Reminder**: Upcoming appointment reminder
- **Change**: Schedule modification alert
- **Cancellation**: Appointment cancellation notice

### Notification Channels
- Email (primary)
- In-app notifications
- SMS (optional, configurable)
- Calendar invitations (iCal format)

### Notification Timing
- Invitation: Immediate upon attorney request
- Confirmation: Immediate upon scheduling
- Reminders: Configurable (default: 1 week, 1 day, 1 hour before)
- Changes: Immediate upon modification
- Cancellations: Immediate upon cancellation

## External Calendar Integration

### Supported Calendar Systems
- Microsoft 365 Calendar
- Google Calendar
- Apple iCalendar
- Standard iCalendar (.ics) format

### Integration Methods
- OAuth 2.0 authentication for cloud calendars
- iCalendar feed subscription
- Manual import/export of calendar data

### Synchronization Options
- One-way sync (system to external calendar)
- Two-way sync (with conflict resolution)
- Selective synchronization of specific events
- Real-time updates vs. scheduled sync

## Security Considerations

### Data Protection
- Encryption of all calendar data
- Limited visibility based on user role
- Witness-specific access tokens
- Secure transmission of calendar invitations

### Access Control
- Integration with main access control system
- Time-limited access for witnesses
- IP-based access restrictions (optional)
- Audit logging of all scheduling activities

### Privacy Considerations
- Witness contact information protection
- Anonymized calendar entries for sensitive cases
- Configurable information disclosure settings
- Compliance with relevant privacy regulations

## Technical Implementation

### Database Schema
```
Calendars
- calendar_id (PK)
- case_id (FK)
- name
- description
- created_by
- created_at

TimeSlots
- slot_id (PK)
- calendar_id (FK)
- start_time
- end_time
- status (open, reserved, confirmed, blocked, completed, canceled)
- created_by
- created_at
- updated_at

WitnessSchedules
- schedule_id (PK)
- witness_id (FK)
- slot_id (FK)
- status
- notes
- created_at
- updated_at

Notifications
- notification_id (PK)
- recipient_id (FK)
- type
- content
- delivery_status
- created_at
- sent_at

CalendarIntegrations
- integration_id (PK)
- user_id (FK)
- provider (microsoft, google, apple)
- access_token
- refresh_token
- last_sync
- created_at
```

### API Endpoints
- `/api/calendars` - Calendar management
- `/api/timeslots` - Time slot management
- `/api/witness-schedules` - Witness scheduling
- `/api/notifications` - Notification management
- `/api/calendar-integrations` - External calendar integration

### Implementation Technologies
- React Calendar components for UI
- Moment.js or date-fns for date manipulation
- OAuth 2.0 for external calendar authentication
- WebSockets for real-time updates
- iCalendar library for standard format support

## Responsive Design Considerations

### Desktop Experience
- Full calendar view with week/month options
- Side-by-side witness list and calendar
- Drag-and-drop scheduling
- Detailed time slot information

### Tablet Experience
- Optimized calendar view for touch interaction
- Collapsible witness list
- Touch-friendly time slot selection
- Simplified drag-and-drop functionality

### Mobile Experience
- List view of upcoming appointments
- Day view for detailed scheduling
- Simplified time slot selection
- Touch-optimized controls
- Essential information prioritization

## User Experience Enhancements

### Attorney Experience
- Batch scheduling capabilities
- Template schedules for common patterns
- Drag-and-drop interface for quick adjustments
- Visual indicators for witness availability
- Schedule optimization suggestions

### Witness Experience
- Simple, intuitive interface
- Clear availability selection process
- Minimal required interactions
- Mobile-optimized experience
- Clear confirmation and reminder system

## Implementation Roadmap

### Phase 1: Core Calendar System
- Implement basic calendar interface
- Create time slot management
- Develop attorney scheduling controls
- Set up basic notification system

### Phase 2: Witness Portal
- Create witness-specific portal
- Implement availability selection interface
- Develop confirmation system
- Set up witness notification system

### Phase 3: External Integration
- Implement Microsoft 365 Calendar integration
- Add Google Calendar integration
- Develop iCalendar support
- Create import/export functionality

### Phase 4: Advanced Features
- Add conflict resolution system
- Implement schedule optimization
- Develop mobile-specific enhancements
- Create reporting and analytics

## Testing Strategy

### Functional Testing
- Calendar display accuracy
- Time slot management
- Witness scheduling process
- Notification delivery
- External calendar synchronization

### User Acceptance Testing
- Attorney workflow validation
- Witness portal usability
- Mobile responsiveness verification
- Notification effectiveness

### Performance Testing
- Calendar loading speed
- Synchronization efficiency
- Notification delivery timing
- Concurrent user handling

## Conclusion
This witness scheduling and calendar system design provides a comprehensive framework for managing witness availability while maintaining security and ease of use. The system balances the needs of attorneys for complete control with the simplicity required for witness interaction, all while ensuring proper integration with external calendar systems and maintaining responsive design across all devices.
