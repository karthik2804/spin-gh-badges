## spin-gh-badges

This is an example of using Spin to dynamically create status badges based on content from github gists. This uses the NPM package [tiny-badge-maker](https://www.npmjs.com/package/tiny-badge-maker/v/1.1.1) to generate the badges. This can be used to create multiple status badges for Github actions by having the action write to a Github gist the different gists and using this app to create the badges.

### Example

The following badges are rendered from https://gist.github.com/karthik2804/3bd187a2ec3087f16c651d3d63fa5da1/

![](https://spin-gh-badges-zvwd1o0r.fermyon.app/?src=https://gist.githubusercontent.com/karthik2804/3bd187a2ec3087f16c651d3d63fa5da1/raw/test.json)

![](https://spin-gh-badges-zvwd1o0r.fermyon.app/?src=https://gist.githubusercontent.com/karthik2804/3bd187a2ec3087f16c651d3d63fa5da1/raw/build.json)

### Building

Run the following commands to build the application:

```
npm install
npm run build
```

### Deploy

To deploy to Fermyon Cloud, run the following command:

```
spin deploy
```

### Usage

To embed a badge in a README use the following

```
![](https://<SPIN_APP_URL>/?src=<GIST_URL>/raw/<FILENAME>
```

Where 
- SPIN_APP_URL is the url to which the Spin app is deployed
- GIST_URL is the url of the gist to create badges from
- FILENAME is the particular filename to create the badge from.
