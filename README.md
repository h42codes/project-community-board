# Web Development Project 1 - Community Board

Submitted by: HJ Kim

This web app displays cards for upcoming World Baseball Classic matches happening in a few weeks. Each card shows the date, time, and location of the match, as well as a button that links to a preview of the corresponding game.

Time spent: 3.5 hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **There is a unique theme for events or resources relevant to a specific community**
- [x] **At least 10 unique resources or events are displayed in a responsive card format**

The following **optional** features are implemented:

- [x] Buttons or links to a related resources are on each card component
- [x] The site is responsive for both desktop and mobile formats

The following **additional** features are implemented:

- [x] User can search for specific countries to see only the relevant games.

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://github.com/h42codes/project-community-board/raw/main/cap.gif' title='Video Walkthrough' width='768px' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->

GIF created with LICEcap

<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

I encountered a challenge where the cards were overflowing their container. I tried changing multiple CSS properties to fix the issue, which took me quite some time. As it turns out, the problem could be fixed by adding box-sizing: border-box to the container.
<br>
Considering where to place the search bar within the components was yet another challenge. I spent some time deciding whether to add the search bar in the App component or the Board component, ultimately choosing the Board component as it makes more sense to keep the search bar and the cards it filters in the same container.

## License

    Copyright 2023 HJ Kim

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
