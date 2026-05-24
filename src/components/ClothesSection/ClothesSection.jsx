import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const emptyWardrobePreviews = [
  { label: "Outerwear", type: "outerwear" },
  { label: "Sweaters", type: "sweaters" },
  { label: "Accessories", type: "accessories" },
  { label: "Footwear", type: "footwear" },
];

function ClothesSection({
  onCardClick,
  clothingItems,
  handleAddClick,
  onCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);
  const _id = currentUser?._id || "";
  const userItems = clothingItems.filter((item) => item.owner === _id);
  const hasUserItems = userItems.length > 0;

  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__title">Your items</p>
        <button
          onClick={handleAddClick}
          type="button"
          className="clothes-section__add-btn"
        >
          + Add new
        </button>
      </div>
      {hasUserItems ? (
        <ul className="clothes-section__items">
          {userItems.map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
              />
            );
          })}
        </ul>
      ) : (
        <section
          className="clothes-section__empty"
          aria-labelledby="wardrobeEmptyTitle"
        >
          <div className="clothes-section__empty-content">
            <div
              className="clothes-section__empty-illustration"
              aria-hidden="true"
            >
              <div className="clothes-section__empty-rail"></div>
              <div className="clothes-section__empty-hanger"></div>
              <div className="clothes-section__empty-garment clothes-section__empty-garment_type_jacket"></div>
              <div className="clothes-section__empty-garment clothes-section__empty-garment_type_shirt"></div>
            </div>
            <p className="clothes-section__empty-eyebrow">Your wardrobe</p>
            <h2
              className="clothes-section__empty-title"
              id="wardrobeEmptyTitle"
            >
              Start building your collection
            </h2>
            <p className="clothes-section__empty-description">
              Add clothing items to personalize your daily outfit
              recommendations and weather-based suggestions.
            </p>
            <button
              onClick={handleAddClick}
              type="button"
              className="clothes-section__empty-add-btn"
            >
              + Add new
            </button>
          </div>

          <ul className="clothes-section__empty-previews" aria-hidden="true">
            {emptyWardrobePreviews.map((preview) => (
              <li
                className={`clothes-section__empty-preview clothes-section__empty-preview_type_${preview.type}`}
                key={preview.label}
              >
                <div className="clothes-section__empty-preview-image">
                  <span className="clothes-section__empty-preview-icon"></span>
                </div>
                <div className="clothes-section__empty-preview-footer">
                  <span className="clothes-section__empty-preview-name">
                    {preview.label}
                  </span>
                  <span className="clothes-section__empty-preview-meta">
                    Ready to add
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

export default ClothesSection;
