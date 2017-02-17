/* START SOLUTION */
var VideoList = ({videos, handleVideoListEntryTitleClick}) => (
  <div className="video-list media">
    {videos.map((video) =>
      <VideoListEntry
        key={video.etag}
        video={video}
        handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
      />
    )}
  </div>
);
/* ELSE
var VideoList = () => (
  <div className="video-list media">
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
  </div>
);
END SOLUTION*/

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
