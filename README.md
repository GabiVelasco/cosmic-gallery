

### `README.md`

```markdown
# NASA Astronomy Picture of the Day (APOD) Project

This project, created by Gabriela Velasco, integrates the NASA API to display the Astronomy Picture of the Day (APOD) along with its description, allowing users to view the latest images from NASA. The app fetches data from NASA's API and displays the daily pictures along with their titles, explanations, and additional details. 

## Technologies Used
- React
- Tailwind CSS
- NASA API

## Project Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nasa-apod.git
   cd nasa-apod
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up the environment variables:
   - Create a `.env` file in the root of your project and add the NASA API key:
   ```bash
   REACT_APP_NASA_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed!

## Project Structure

```plaintext
public/
  ├── index.html
src/
  ├── App.css
  ├── App.js
  ├── footer.js
  ├── index.css
  ├── index.js
  ├── nasaApi.js
.gitignore
changelog.md
package-lock.json
package.json
postcss.config.js
README.md
tailwind.config.js
```

## Future Work
- Set up backend integration for scheduling and storing NASA data in a database.
- Add more features such as a gallery or a search function for past images.

## License
This project is licensed under the MIT License.
```

---

### `CHANGELOG.md`

```markdown
# Changelog

## [Unreleased]
- Initial setup with React.
- Installed Tailwind CSS and configured it.
- Integrated NASA API for fetching the Astronomy Picture of the Day (APOD).
- Displayed APOD with title, image, and explanation.
- Setup environment variables for API key.

## [Nov 10, 2024]

### Added
- **New Feature**: Show images for four days instead of just one.
- **New Feature**: Automatic date added to display daily pictures.
- **Footer Component**: Created `footer.js` for adding footer content to the app.
- **API Update**: Enhanced the NASA API integration for fetching multiple days' images.
- **File Cleanup**: Removed unnecessary files including `public/manifest.json` and `public/robots.txt`.

### Removed
- **Unnecessary Files**: Removed unused files and images for a cleaner project structure.

## [Nov 8, 2024]

### Added
- **Libraries**: Installed Tailwind CSS, PostCSS, and Autoprefixer.
- **Index.html**: Added initial DOCTYPE structure for testing.
- **App.js**: Added basic structure for displaying NASA APOD data (image, title, and explanation).
- **Tailwind Config**: Updated tailwind.config.js to include file types (`"./src/**/*.{js,jsx,ts,tsx}"`).
- **PostCSS Config**: Fixed a comma issue in `postcss.config.js`.
- **Package Files**: Updated `package.json` and `package-lock.json` with necessary dependencies and configurations.
- **React App**: Added a new React project using Create React App template.
- **API Setup**: Started integrating the NASA API to fetch the Astronomy Picture of the Day (APOD).
```


