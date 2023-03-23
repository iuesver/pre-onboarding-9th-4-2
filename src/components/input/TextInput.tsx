import useSWR from "swr";
import { fetcher } from "../../functions/fetcher";
import { Data } from "../../types/type";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

const TextInput = ({
  searchParams,
  setSearchParams,
}: {
  searchParams: URLSearchParams;
  setSearchParams: (arg?: URLSearchParams) => void;
}) => {
  const { data } = useSWR("/", fetcher);
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="주문자 이름을 검색하세요."
        data-testid="text-input"
        className="input input-bordered w-96"
        value={searchParams.get("keyword") || ""}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          if (event.target.value.length === 0) {
            searchParams.delete("keyword");
            searchParams.set("page", "1");
            setSearchParams(searchParams);
          } else {
            data?.filter((item: Data) =>
              item.customer_name.includes(event.target.value)
            );
            searchParams.set("keyword", event.target.value);
            searchParams.set("page", "1");
            setSearchParams(searchParams);
          }
        }}
      />
      <ArrowPathIcon
        className="inline w-6 h-6 ml-4 mb-2 cursor-pointer"
        onClick={() => {
          setSearchParams();
        }}
      />
    </div>
  );
};
export default TextInput;
