export function formatTime(timestamp) {
      const currentDate = new Date();
      const pastDate = new Date(timestamp);
    
      const seconds = Math.floor((currentDate - pastDate) / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
    
      if (days > 0) {
        return days === 1 ? 'a day ago' : `${days} days ago`;
      } else if (hours > 0) {
        return hours === 1 ? 'an hour ago' : `${hours} hours ago`;
      } else if (minutes > 0) {
        return minutes === 1 ? 'a minute ago' : `${minutes} minutes ago`;
      } else {
        return seconds <= 5 ? 'just now' : `${seconds} seconds ago`;
      }
    }
    

    