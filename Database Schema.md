## Database Schema

The app is currently using **3 tables** in Supabase

### 1. `Location`

Stores campus buildings where items are lost or found.
 
| Column       | Type           | Description            |
|--------------|----------------|------------------------|
| `id`         | `bigint` (Primary Key)  | Auto-generated ID      |
| `name`       | `text` (unique) | Building name          |
| `created_at` | `timestamptz`  | Record creation time   |
 
**Pre-filled building include:** CIF, Grainger, Union, Main Library, ISR, Ikenberry

### 2. `item_types`
 
Example of some Categories for classifying lost items.
 
| Column       | Type           | Description            |
|--------------|----------------|------------------------|
| `id`         | `bigint` (Primary Key)  | Auto-generated ID      |
| `name`       | `text` (unique) | Category name          |
| `created_at` | `timestamptz`  | Record creation time   |
 
**Pre-filled category include:** Electronics, Clothing, Keys, Water Bottle, Backpack / Bag, Wallet / ID, Headphones, Umbrella, Textbook / Notebook, Other
 
### 3. `lost_items`
 
The main table restrict to one row per lost item report.
 
| Column              | Type           | Description                                      |
|---------------------|----------------|--------------------------------------------------|
| `id`                | `bigint` (Primary Key)  | Auto-generated ID                       |
| `name`              | `text`         | Item name                                        |
| `description`       | `text`         | Detailed item description                        |
| `date_lost`         | `date`         | Date the item was lost                           |
| `image_url`         | `text`         | URL to item image in Supabase Storage            |
| `item_type_id`      | `bigint` (Foreign Key)  | References `item_types.id`              |
| `location_id`       | `bigint` (Foreign Key)  | References `locations.id`               |
| `specific_location` | `text`         | Where exactly the item was found (e.g. "2nd floor Grainger") |
| `status`            | `text`         | `lost`, `found`, or `returned`                   |
| `created_at`        | `timestamptz`  | Record creation time                             |
 
## Entity Relationship Diagram
 
```
┌──────────────┐       ┌──────────────────────┐       ┌──────────────┐
│  locations   │       │     lost_items       │       │  item_types  │
├──────────────┤       ├──────────────────────┤       ├──────────────┤
│ id (PK)      │◄──────│ location_id (FK)     │       │ id (PK)      │
│ name         │       │ item_type_id (FK)    │──────►│ name         │
│ created_at   │       │ id (PK)              │       │ created_at   │
└──────────────┘       │ name                 │       └──────────────┘
                       │ description          │
                       │ date_lost            │
                       │ image_url            │
                       │ specific_location    │
                       │ status               │
                       │ created_at           │
                       └──────────────────────┘
```
## Row Level Security (RLS)
 
All tables have RLS enabled with the following policies:
 
| Table        | Policy             | Description                     |
|--------------|--------------------|---------------------------------|
| `locations`  | Public read        | Anyone can view locations       |
| `item_types` | Public read        | Anyone can view item types      |
| `lost_items` | Public read        | Anyone can browse lost items    |
| `lost_items` | Public insert      | Anyone can report a lost item   |
 
> **Note:** These are open policies for the class projects. If we have time to implement the authentication, insert/update/delete policies will be available only to authenticated users (Illinois Student).
 
