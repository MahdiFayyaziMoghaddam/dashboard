import Image from "@/components/atoms/Image";

interface DealsTableProps {
  className?: string;
}

const DealsTable = ({ className }: DealsTableProps) => {
  return (
    <table className={`border-collapse w-full ${className}`}>
      <thead className="bg-main-text/8 border-main-text/10 border-2 rounded-2xl">
        <tr className="*:py-[1.4rem] *:px-[2.4rem] *:text-left *:text-[1.4rem] *:font-medium">
          <th>Product Name</th>
          <th>Location</th>
          <th>Date - Time</th>
          <th>Piece</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b-1 border-main-text/20 *:py-[1.2rem] *:px-[2.4rem] *:text-[1.4rem] hover:bg-main-text/4">
          <td>
            <div className="flex items-center gap-[1.6rem]">
              <Image
                src="/svg/notif.svg"
                alt="product-icon"
                className="size-[3.6rem] rounded-full"
              />
              <p>Apple Watch</p>
            </div>
          </td>
          <td>6096 Marjolaine Landing</td>
          <td>12.09.2019 - 12.53 PM</td>
          <td>423</td>
          <td>$34,295</td>
          <td>
            <div className="bg-main-green rounded-[1.3rem] w-[9rem] py-[0.4rem] px-[1.5rem] text-center">
              Delivered
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default DealsTable;
