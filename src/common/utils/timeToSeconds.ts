export function timeToSeconds(time: string) {
    const [hour, minutes, seconds] = time.split(":");
    return parseInt(hour)*3600 + parseInt(minutes)*60 + parseInt(seconds)
}