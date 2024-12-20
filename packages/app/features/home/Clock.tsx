import { useClockStore, useInterval } from "@gtw/app/stores";
import { H2 } from "@gtw/ui";

const formatTime = (time: number) => {
  // cut off except hh:mm:ss
  return new Date(time).toLocaleTimeString();
};

export function Clock() {
  const { lastUpdate, tick } = useClockStore();

  // Tick the time every second
  useInterval(() => {
    tick(Date.now());
  }, 1000);

  return (
    <H2 ta="center" suppressHydrationWarning>
      {formatTime(lastUpdate)}
    </H2>
  );
}
