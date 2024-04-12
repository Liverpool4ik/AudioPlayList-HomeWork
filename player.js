//data
const playListHipHop = {
	playListID: "1",
	headerBlock: {
		imageCoverUrl: "./images/HipHopPlayListImages/mainCoverImage.jpg",
		topWord: "PlayList",
		title: "Hip Hop Hits",
		tracksInfo: {
			tracksCount: 4,
			tracksDurationInSeconds: 733,
			trackTitles: "Eminem, 50cent, Lloyd Banks and others",
		},
	},
	tracksBlock: [
		{
			trackId: "11",
			coverTrackImg: "./images/HipHopPlayListImages/image-1.jpg",
			trackFileUrl:
				"/musicTracks/playListHipHop/Eminem_-_Rap_God_[mp3pulse.ru]_sample.mp3",
			artistName: "Eminem",
			trackTitle: "Rap God",
			isPopular: true,
		},
		{
			trackId: "11",
			coverTrackImg: "./images/HipHopPlayListImages/image-2.jpg",
			trackFileUrl: "/musicTracks/playListHipHop/track37695032.mp3",
			artistName: "50 cent",
			trackTitle: "In da Club",
			isPopular: true,
		},
		{
			trackId: "11",
			coverTrackImg: "./images/HipHopPlayListImages/image-3.jpg",
			trackFileUrl:
				"/musicTracks/playListHipHop/DMX - X Gon' Give It To Ya (192kbps).mp3",
			artistName: "DMX",
			trackTitle: "X Gon'Give It to YA",
			isPopular: false,
		},
		{
			trackId: "11",
			coverTrackImg: "./images/HipHopPlayListImages/image-4.jpg",
			trackFileUrl: "/musicTracks/playListHipHop/4.mp3",
			artistName: "Eminem feat 50 cent, Cashis, Lloyd Banks",
			trackTitle: "You Don't Know",
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
			trackTitles: "Eminem, 50cent, Lloyd Banks and others",
		},
	},
	tracksBlock: [
		{
			trackId: "11",
			coverTrackImg: "./images/image-1.jpg",
			trackFileUrl: "/musicTracks/playListRapHits1990/track-1.mp3",
			artistName: "Public Enemy",
			trackTitle: "Fight the Power",
			isPopular: true,
		},
		{
			trackId: "11",
			coverTrackImg: "./images/image-2.jpg",
			trackFileUrl: "/musicTracks/playListRapHits1990/track-2.mp3",
			artistName: "Vanilla Ice",
			trackTitle: "Ice Ice Baby",
			isPopular: true,
		},
		{
			trackId: "11",
			coverTrackImg: "./images/image-3.jpg",
			trackFileUrl: "/musicTracks/playListRapHits1990/track-3.mp3",
			artistName: "MC Hammer",
			trackTitle: "You Can't touch this",
			isPopular: false,
		},
		{
			trackId: "11",
			coverTrackImg: "./images/image-4.jpg",
			trackFileUrl: "/musicTracks/playListRapHits1990/track-4.mp3",
			artistName: "Brand Nubian",
			trackTitle: "Brand Nubian",
			isPopular: false,
		},
	],
};

//render

// const playListTitleElement = document.createElement("h1");
// playListTitleElement.append(playListRapHits1990.headerBlock.title);
// document.body.append(playListTitleElement);

// const playListCoverImageElement = document.createElement("img");
// playListCoverImageElement.src = playListRapHits1990.headerBlock.imageCoverUrl;
// document.body.append(playListCoverImageElement);

// const trackListElement = document.createElement("ul");
// for (let i = 0; i < playListRapHits1990.tracksBlock.length; i++) {
// 	const trackElement = document.createElement("li");
// 	const trackCoverElement = document.createElement("img");
// 	trackCoverElement.src = playListRapHits1990.tracksBlock[i].coverTrackImg;
// 	trackCoverElement.style.width = "50px";
// 	trackCoverElement.style.height = "50px";
// 	trackElement.append(trackCoverElement);
// 	trackElement.append(
// 		playListRapHits1990.tracksBlock[i].artistName +
// 			" - " +
// 			playListRapHits1990.tracksBlock[i].trackTitle
// 	);
// 	trackListElement.append(trackElement);
// }

// document.body.append(trackListElement);

function renderPlayList(anyPlayList) {
	renderPlayListHeader(anyPlayList.headerBlock);

	const trackListElement = document.createElement("ul");
	for (let i = 0; i < anyPlayList.tracksBlock.length; i++) {
		const trackElement = createAnyTrack(anyPlayList.tracksBlock[i]);
		trackListElement.append(trackElement);
	}
	document.body.append(trackListElement);
}

function renderPlayListHeader(anyPlayListHeader) {
	const playListTitleElement = document.createElement("h1");
	playListTitleElement.append(anyPlayListHeader.title);
	document.body.append(playListTitleElement);

	const playListCoverImageElement = document.createElement("img");
	playListCoverImageElement.src = anyPlayListHeader.imageCoverUrl;
	document.body.append(playListCoverImageElement);
}
function createAnyTrack(anyTrack) {
	const trackElement = document.createElement("li");
	const trackCoverElement = document.createElement("img");
	trackCoverElement.src = anyTrack.coverTrackImg;
	trackCoverElement.style.width = "50px";
	trackCoverElement.style.height = "50px";

	const audioElement = document.createElement("audio");
	audioElement.src = anyTrack.trackFileUrl;
	audioElement.controls = true;
	trackElement.append(trackCoverElement);
	trackElement.append(anyTrack.artistName + " - " + anyTrack.trackTitle);
	trackElement.append(audioElement);
	return trackElement;
}

renderPlayList(playListHipHop);
renderPlayList(playListRapHits1990);
