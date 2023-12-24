import { useContext } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './Select';
import { AppContext } from '../contexts/AppContext';
import HelpDialog from './HelpDialog';
import { TAlgorithm, algorithms } from '../../lib/algorithms';

function AppBar(): React.ReactElement {
  const ctx = useContext(AppContext);

  return (
    <header className="flex items-center justify-between w-full bg-black/80 text-white py-2 px-8">
      <div className="flex items-center ">
        <div className="flex items-center space-x-2">
          <span>Algorithm:</span>
          <Select
            onValueChange={(val: TAlgorithm) => ctx.setAlgorithm(val)}
            value={ctx.algorithm}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Algorithm" />
            </SelectTrigger>
            <SelectContent>
              {algorithms.map((v) => (
                <SelectItem
                  value={v}
                  key={v}
                >
                  {v}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="ml-8 flex items-center space-x-2">
          <span>Element Count</span>
          <Select
            onValueChange={(val) => ctx.setCount(+val)}
            value={'' + ctx.count}
          >
            <SelectTrigger
              className="w-[190px]"
              defaultValue={'' + ctx.count}
            >
              <SelectValue placeholder="Element Count" />
            </SelectTrigger>
            <SelectContent defaultValue={ctx.count}>
              <SelectItem value="8">8</SelectItem>
              <SelectItem value="16">16</SelectItem>
              <SelectItem value="32">32</SelectItem>
              <SelectItem value="64">64</SelectItem>
              <SelectItem value="128">128</SelectItem>
              <SelectItem value="256">256</SelectItem>
              <SelectItem value="512">512</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <a
          href="https://github.com/mertturkmenoglu/sorting-visualization"
          target="_blank"
          rel="noopener"
        >
          GitHub
        </a>
        <button>Start</button>
        <button>Random</button>
        <button>Sorted</button>
        <button>Shuffle</button>
        <button>Reverse</button>
        <button>Reset</button>
        <HelpDialog />
      </div>
    </header>
  );
}

export default AppBar;
