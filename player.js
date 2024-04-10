//data
const playListHipHop = {
	playListID: "1",
	headerBlock: {
		imageCoverUrl: "./images/mainCoverImage.jpg",
		topWord: "PlayList",
		title: "Rap Hits 1990s",
		tracksInfo: {
			tracksCount: 4,
			tracksDurationInSeconds: 733,
			trackNames: "Eminem, 50cent, Lloyd Banks and others",
		},
	},
	tracksBlock: [
		{
			coverTrackImg: "./images/image-1.jpg",
			artistName: "Public Enemy",
			trackName: "Fight the Power",
			isPopular: true,
		},
		{
			coverTrackImg: "./images/image-2.jpg",
			artistName: "Vanilla Ice",
			trackName: "Ice Ice Baby",
			isPopular: true,
		},
		{
			coverTrackImg: "./images/image-3.jpg",
			artistName: "MC Hammer",
			trackName: "You Can't touch this",
			isPopular: false,
		},
		{
			coverTrackImg: "./images/image-4.jpg",
			artistName: "Brand Nubian",
			trackName: "Brand Nubian",
			isPopular: false,
		},
	],
};

const playListRapHits1990 = {
	playListID: "2",
	headerBlock: {
		imageCoverUrl: "./images/mainCoverImage.jpg",
		topWord: "PlayList",
		title: "Rap Hits 1990s",
		tracksInfo: {
			tracksCount: 4,
			tracksDurationInSeconds: 733,
			trackNames: "Eminem, 50cent, Lloyd Banks and others",
		},
	},
	tracksBlock: [
		{
			coverTrackImg: "./images/image-1.jpg",
			artistName: "Public Enemy",
			trackName: "Fight the Power",
			isPopular: true,
		},
		{
			coverTrackImg: "./images/image-2.jpg",
			artistName: "Vanilla Ice",
			trackName: "Ice Ice Baby",
			isPopular: true,
		},
		{
			coverTrackImg: "./images/image-3.jpg",
			artistName: "MC Hammer",
			trackName: "You Can't touch this",
			isPopular: false,
		},
		{
			coverTrackImg: "./images/image-4.jpg",
			artistName: "Brand Nubian",
			trackName: "Brand Nubian",
			isPopular: false,
		},
	],
};

//render

const playListTitleElement = document.createElement("h1");
playListTitleElement.append(playListRapHits1990.headerBlock.title);
document.body.append(playListTitleElement);

const playListCoverImageElement = document.createElement("img");
playListCoverImageElement.src = playListRapHits1990.headerBlock.imageCoverUrl;
document.body.append(playListCoverImageElement);

const trackListElement = document.createElement("ul");
for (let i = 0; i < trackListElement.length; i++) {
	const trackElement = document.createElement("li");
	const trackCoverElement = document.createElement("img");
	trackCoverElement.src = playListRapHits1990.tracksBlock[i].coverTrackImg;
	trackCoverElement.style.width = "50px";
	trackCoverElement.style.height = "50px";
	trackElement.append(trackCoverElement);
	trackElement.append(
		playListRapHits1990.tracksBlock[i].artistName +
			"-" +
			playListRapHits1990.tracksBlock[i].trackName
	);
	trackListElement.append(trackElement);
}

document.body.append(trackListElement);
