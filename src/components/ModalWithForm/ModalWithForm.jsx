import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  onClose,
  isOpen,
  onSubmit,
  className = "",
  contentClassName = "",
  submitClassName = "",
  variant,
  disabled,
  description,
  formFooter,
}) {
  const variantAttr = variant ? `modal--${variant}` : "";

  return (
    <div
      className={`modal ${
        isOpen && "modal_opened"
      } ${className} ${variantAttr}`}
    >
      <div className={`modal__content ${contentClassName}`}>
        <div className="modal__header">
          <h2 className="modal__title">{title}</h2>
          {description && <p className="modal__description">{description}</p>}
        </div>
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
          aria-label="Close modal"
        />
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <button
            disabled={disabled}
            type="submit"
            className={`modal__submit ${submitClassName}`}
          >
            {buttonText}
          </button>
          {formFooter && <div className="modal__form-footer">{formFooter}</div>}
        </form>
      </div>
    </div>
  );
}
export default ModalWithForm;
