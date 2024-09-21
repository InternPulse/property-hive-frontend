import PropTypes from "prop-types";

const ListingCard = ({ title, location, details, price, image }) => {
  const modDetails = details.join(" | ");
  return (
    <div
      data-testid="property-listing-card"
      className="space-y-2 rounded-lg bg-neutrals-25 p-4"
    >
      <div className="rounded-lg">
        <img src={image} alt="" className="" />
      </div>
      <div className="">
        <div className="space-y-0.5">
          <h2
            data-testid="property-listing-card-title"
            className="text-lg font-medium text-neutrals-950"
          >
            {title}
          </h2>
          <p className="font-medium text-neutrals-700">{location}</p>
          <p className="text-sm font-medium text-neutrals-700">{modDetails}</p>
          <p className="text-xl font-semibold text-primary-800">{price}</p>
        </div>
      </div>
    </div>
  );
};
ListingCard.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  details: PropTypes.array.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default ListingCard;
