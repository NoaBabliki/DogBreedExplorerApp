# Dog Breed Explorer App

This app is using  The Dog API.

The goal is to create a quick and simple react app, with the following requirements:

* Fetch data from The Dog API to display dog breeds and relevant details.
* The data should include:
  Breed Name
  Breed Group (if available)
  Image of the breed (optional)
  Life Span (if available)
* Display data in table format
* Filter by breed name
* Sort by breed name

## Bonus Features

* Add loading and error states to indicate when data is being fetched or if there was an error.
* Implement pagination if the number of breeds is large.
* Add a dark/light mode toggle to showcase additional UI skills.

## Start the program
`npm run dev` from root directory.

## Initial Design

This is a simple representation of the component tree (base requirements only):

<img width="438" alt="Screenshot 2024-12-06 at 17 15 45" src="https://github.com/user-attachments/assets/f5459316-651a-47db-9b63-64e915970fec">

Bonus:

* Pagination component in the same level of the tree as Table.tsx and Toolbar.tsx.
* ThemeProvider using useContext hook - simple global state.

## Notes

* Dog api doesn't have working sort / filter abilities, so I implemented the FE side that add the required query parameters, but the BE does nothing with them.
* I didn't think too hard about beutiful design and css.
