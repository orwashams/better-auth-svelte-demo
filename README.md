# Locale Manager

My first SaaS attempt, a locale manager, the main goal is to manage locales in a fast gui way, detecting mismatches,
and changing the translation with blazing speeds.

## Features

- Login.
- Per-user projects.
- Each project is a collection of tables.
- Each table is assigned a locale.
- Each table has two columns Source + Target.
- Source is the source `help: مساعده` in this case 'help' is the source.
- Target is the traslation but it can also be a sub-table.
- Target can be an object, array or string.
- If target is object or array, it's a clickable div.
- If target is clickable div, we route the user to a new sub-table.
- If the user inside the sub-tables, we display breadcrumbs.
- The user can search terms, Source or Target.
- If a row is added, it'll be added to all tables.
- If source is defined it'll be shared between all tables.
- User can export table as .ts, .json or .js ... support will be added for etc.
- Issue warning for empty cells, or mismatched table (if thats even possible).

## Todo:

- [x] Basic Auth Setup.
- [x] Basic Database Setup.
- [ ] Figure out the best schema.
- [ ] Implement adding rows.
- [ ] Implement removing rows.
- [ ] Implement action menu when right clicking a row.
- [ ] Implement "double click to edit" on the target if its plain string.
- [ ] Implement tabs to navigate locale tables inside a project.
- [ ] Implement the user dashboard.
- [ ] Figure out routing.
- [ ] Setup a sub-domain from orwa.dev, locale.orwa.dev.
- [ ] Hosting.
- [ ] Add render on hover for pagination.

## Database:

### Users

each user has projects,<br/>
each project has locale tables,<br/>
each table has two colums and many rows,<br/>
each row has source and target, <br/>
source is always a string, <br/>
target can be string or a link to a sub-table.<br/>

## Action Menu:

- Delete Row.
- Add row below.
- Add row above.
- Edit cell.
- Clear cell.

## Used Library or Will be Used (for now)

- shadcn
- tanstack tale
- clerk
- drizzle
- turso
- sqlite (libsql)
- will be using framer motion
