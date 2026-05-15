"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Accordion: () => Accordion,
  AccordionItem: () => AccordionItem,
  Avatar: () => Avatar,
  AvatarBlock: () => AvatarBlock,
  AvatarGroup: () => AvatarGroup,
  Button: () => Button,
  ButtonGroup: () => ButtonGroup,
  Calendar: () => Calendar,
  CalendarButton: () => CalendarButton,
  Card: () => Card,
  CardSlot: () => CardSlot,
  Checkbox: () => Checkbox,
  DateInput: () => DateInput,
  DatePicker: () => DatePicker,
  DialogBody: () => DialogBody,
  Icon: () => Icon,
  Menu: () => Menu,
  MenuHeader: () => MenuHeader,
  MenuHeading: () => MenuHeading,
  MenuItem: () => MenuItem,
  MenuSeparator: () => MenuSeparator,
  MenuShortcut: () => MenuShortcut,
  NavigationButton: () => NavigationButton,
  NavigationButtonList: () => NavigationButtonList,
  NavigationPill: () => NavigationPill,
  NavigationPillList: () => NavigationPillList,
  Notification: () => Notification,
  Pagination: () => Pagination,
  PaginationGap: () => PaginationGap,
  PaginationList: () => PaginationList,
  PaginationNext: () => PaginationNext,
  PaginationPage: () => PaginationPage,
  PaginationPrevious: () => PaginationPrevious,
  PricingCard: () => PricingCard,
  ProductInfoCard: () => ProductInfoCard,
  Radio: () => Radio,
  ReviewCard: () => ReviewCard,
  Search: () => Search,
  Select: () => Select,
  Slider: () => Slider,
  StatsCard: () => StatsCard,
  Switch: () => Switch,
  Tab: () => Tab,
  Tabs: () => Tabs,
  Tag: () => Tag,
  TagToggleGroup: () => TagToggleGroup,
  TestimonialCard: () => TestimonialCard,
  Text: () => Text,
  TextArea: () => TextArea,
  TextField: () => TextField,
  Tooltip: () => Tooltip
});
module.exports = __toCommonJS(src_exports);

// src/components/Accordion/Accordion.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var Accordion = (0, import_react.forwardRef)(function Accordion2({ className, children, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      ref,
      className: ["sds-accordion", className].filter(Boolean).join(" "),
      ...rest,
      children
    }
  );
});

// src/components/AccordionItem/AccordionItem.tsx
var import_react2 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var AccordionItem = (0, import_react2.forwardRef)(
  function AccordionItem2({ open = false, title, content, onToggle, className, children, ...rest }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "div",
      {
        ref,
        "data-open": open,
        className: ["sds-accordion-item", className].filter(Boolean).join(" "),
        ...rest,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
            "button",
            {
              type: "button",
              "aria-expanded": open,
              className: "sds-accordion-item__header",
              onClick: onToggle,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "sds-accordion-item__title", children: title }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                  "svg",
                  {
                    viewBox: "0 0 20 20",
                    width: 20,
                    height: 20,
                    "aria-hidden": "true",
                    className: "sds-accordion-item__chevron",
                    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                      "path",
                      {
                        d: "M6 8 L10 12 L14 8",
                        stroke: "currentColor",
                        strokeWidth: "1.75",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        fill: "none"
                      }
                    )
                  }
                )
              ]
            }
          ),
          open && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sds-accordion-item__content", children: children ?? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: content }) })
        ]
      }
    );
  }
);

// src/components/Avatar/Avatar.tsx
var import_react3 = require("react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var Avatar = (0, import_react3.forwardRef)(function Avatar2({ size = "lg", shape = "circle", src, alt = "", initials, className, ...rest }, ref) {
  const isImage = src != null;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "span",
    {
      ref,
      "data-size": size,
      "data-shape": shape,
      "data-type": isImage ? "image" : "initial",
      className: ["sds-avatar", className].filter(Boolean).join(" "),
      ...rest,
      children: isImage ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", { src, alt, className: "sds-avatar__image" }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sds-avatar__initials", children: initials })
    }
  );
});

// src/components/AvatarBlock/AvatarBlock.tsx
var import_react4 = require("react");
var import_jsx_runtime4 = require("react/jsx-runtime");
var AvatarBlock = (0, import_react4.forwardRef)(
  function AvatarBlock2({ avatar, title, subtitle, className, children, ...rest }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      "div",
      {
        ref,
        className: ["sds-avatar-block", className].filter(Boolean).join(" "),
        ...rest,
        children: [
          avatar != null && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "sds-avatar-block__avatar", children: avatar }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "sds-avatar-block__text", children: children ?? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
            title != null && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "sds-avatar-block__title", children: title }),
            subtitle != null && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "sds-avatar-block__subtitle", children: subtitle })
          ] }) })
        ]
      }
    );
  }
);

// src/components/AvatarGroup/AvatarGroup.tsx
var import_react5 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var AvatarGroup = (0, import_react5.forwardRef)(
  function AvatarGroup2({ spacing = "overlap", className, children, ...rest }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "div",
      {
        ref,
        "data-spacing": spacing,
        className: ["sds-avatar-group", className].filter(Boolean).join(" "),
        ...rest,
        children
      }
    );
  }
);

// src/components/Button/Button.tsx
var import_react6 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
var Button = (0, import_react6.forwardRef)(function Button2({
  variant = "primary",
  size = "md",
  iconStart,
  iconEnd,
  type = "button",
  className,
  children,
  ...rest
}, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    "button",
    {
      ref,
      type,
      "data-variant": variant,
      "data-size": size,
      className: ["sds-button", className].filter(Boolean).join(" "),
      ...rest,
      children: [
        iconStart != null && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "sds-button__icon", children: iconStart }),
        children != null && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "sds-button__label", children }),
        iconEnd != null && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "sds-button__icon", children: iconEnd })
      ]
    }
  );
});

// src/components/ButtonGroup/ButtonGroup.tsx
var import_react7 = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var ButtonGroup = (0, import_react7.forwardRef)(
  function ButtonGroup2({ align = "start", className, children, ...rest }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "div",
      {
        ref,
        role: "group",
        "data-align": align,
        className: ["sds-button-group", className].filter(Boolean).join(" "),
        ...rest,
        children
      }
    );
  }
);

// src/components/Calendar/Calendar.tsx
var import_react8 = require("react");
var import_jsx_runtime8 = require("react/jsx-runtime");
var Calendar = (0, import_react8.forwardRef)(function Calendar2({ monthLabel, yearLabel, onPrevMonth, onNextMonth, className, children, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    "div",
    {
      ref,
      role: "application",
      className: ["sds-calendar", className].filter(Boolean).join(" "),
      ...rest,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "sds-calendar__header", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "button",
            {
              type: "button",
              "aria-label": "Previous month",
              className: "sds-calendar__nav",
              onClick: onPrevMonth,
              children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("svg", { viewBox: "0 0 20 20", width: 20, height: 20, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                "path",
                {
                  d: "M12 6 L8 10 L12 14",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  fill: "none"
                }
              ) })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { className: "sds-calendar__title", children: [
            monthLabel,
            yearLabel != null && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
              " ",
              yearLabel
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "button",
            {
              type: "button",
              "aria-label": "Next month",
              className: "sds-calendar__nav",
              onClick: onNextMonth,
              children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("svg", { viewBox: "0 0 20 20", width: 20, height: 20, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                "path",
                {
                  d: "M8 6 L12 10 L8 14",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  fill: "none"
                }
              ) })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "sds-calendar__grid", children })
      ]
    }
  );
});
var CalendarButton = (0, import_react8.forwardRef)(
  function CalendarButton2({ selected = false, inRange = false, type = "button", className, children, ...rest }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "button",
      {
        ref,
        type,
        "aria-pressed": selected,
        "data-selected": selected,
        "data-in-range": inRange,
        className: ["sds-calendar-button", className].filter(Boolean).join(" "),
        ...rest,
        children
      }
    );
  }
);

// src/components/Card/Card.tsx
var import_react9 = require("react");
var import_jsx_runtime9 = require("react/jsx-runtime");
var Card = (0, import_react9.forwardRef)(function Card2({
  variant = "stroke",
  direction = "vertical",
  asset,
  heading,
  body,
  action,
  className,
  children,
  ...rest
}, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    "div",
    {
      ref,
      "data-variant": variant,
      "data-direction": direction,
      className: ["sds-card", className].filter(Boolean).join(" "),
      ...rest,
      children: [
        asset != null && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "sds-card__asset", children: asset }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "sds-card__body", children: children ?? /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
          (heading != null || body != null) && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "sds-card__text", children: [
            heading != null && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "sds-card__heading", children: heading }),
            body != null && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "sds-card__body-text", children: body })
          ] }),
          action != null && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "sds-card__action", children: action })
        ] }) })
      ]
    }
  );
});

// src/components/CardSlot/CardSlot.tsx
var import_react10 = require("react");
var import_jsx_runtime10 = require("react/jsx-runtime");
var CardSlot = (0, import_react10.forwardRef)(function CardSlot2({ className, children, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    "div",
    {
      ref,
      className: ["sds-card-slot", className].filter(Boolean).join(" "),
      ...rest,
      children
    }
  );
});

// src/components/Checkbox/Checkbox.tsx
var import_react11 = require("react");
var import_jsx_runtime11 = require("react/jsx-runtime");
var Checkbox = (0, import_react11.forwardRef)(function Checkbox2({ label, description, indeterminate = false, id, disabled, className, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    "div",
    {
      "data-disabled": disabled,
      className: ["sds-checkbox-field", className].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("label", { className: "sds-checkbox-field__row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            "input",
            {
              ref,
              id,
              type: "checkbox",
              disabled,
              "data-indeterminate": indeterminate,
              className: "sds-checkbox-field__input",
              ...rest
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "sds-checkbox-field__box", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            "svg",
            {
              viewBox: "0 0 16 16",
              width: 16,
              height: 16,
              className: "sds-checkbox-field__check",
              children: indeterminate ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                "path",
                {
                  d: "M4 8 L12 8",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round"
                }
              ) : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                "path",
                {
                  d: "M3.5 8.5 L6.5 11.5 L12.5 4.5",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  fill: "none"
                }
              )
            }
          ) }),
          label != null && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "sds-checkbox-field__label", children: label })
        ] }),
        description != null && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "sds-checkbox-field__description", children: description })
      ]
    }
  );
});

// src/components/DateInput/DateInput.tsx
var import_react12 = require("react");

// src/components/_shared/Field.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function FieldShell({
  label,
  description,
  error,
  disabled = false,
  className,
  children,
  htmlFor
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
    "div",
    {
      "data-disabled": disabled,
      "data-error": error != null,
      className: ["sds-field", className].filter(Boolean).join(" "),
      children: [
        label != null && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("label", { className: "sds-field__label", htmlFor, children: label }),
        description != null && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "sds-field__description", children: description }),
        children,
        error != null && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "sds-field__error", children: error })
      ]
    }
  );
}

// src/components/DateInput/DateInput.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
var DateInput = (0, import_react12.forwardRef)(function DateInput2({ label, description, error, className, id, disabled, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    FieldShell,
    {
      label,
      description,
      error,
      disabled,
      htmlFor: id,
      className,
      children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "input",
        {
          ref,
          id,
          type: "date",
          disabled,
          className: "sds-field__input",
          ...rest
        }
      )
    }
  );
});

// src/components/DatePicker/DatePicker.tsx
var import_react13 = require("react");
var import_jsx_runtime14 = require("react/jsx-runtime");
var DatePicker = (0, import_react13.forwardRef)(
  function DatePicker2({ label, description, error, className, id, disabled, ...rest }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      FieldShell,
      {
        label,
        description,
        error,
        disabled,
        htmlFor: id,
        className,
        children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "sds-datepicker", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            "input",
            {
              ref,
              id,
              type: "date",
              disabled,
              className: "sds-field__input sds-datepicker__control",
              ...rest
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
            "svg",
            {
              viewBox: "0 0 20 20",
              width: 20,
              height: 20,
              "aria-hidden": "true",
              className: "sds-datepicker__icon",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                  "rect",
                  {
                    x: "3",
                    y: "5",
                    width: "14",
                    height: "12",
                    rx: "2",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                  "path",
                  {
                    d: "M3 9 L17 9 M7 3 L7 6 M13 3 L13 6",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round"
                  }
                )
              ]
            }
          )
        ] })
      }
    );
  }
);

// src/components/Dialog/DialogBody.tsx
var import_react14 = require("react");
var import_jsx_runtime15 = require("react/jsx-runtime");
var DialogBody = (0, import_react14.forwardRef)(
  function DialogBody2({
    type = "card",
    heading,
    body,
    action,
    dismissible = false,
    onDismiss,
    className,
    children,
    ...rest
  }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
      "div",
      {
        ref,
        "data-type": type,
        className: ["sds-dialog-body", className].filter(Boolean).join(" "),
        ...rest,
        children: [
          children ?? /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_jsx_runtime15.Fragment, { children: [
            (heading != null || body != null) && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "sds-dialog-body__text", children: [
              heading != null && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "sds-dialog-body__heading", children: heading }),
              body != null && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "sds-dialog-body__copy", children: body })
            ] }),
            action != null && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "sds-dialog-body__action", children: action })
          ] }),
          dismissible && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
            "button",
            {
              type: "button",
              "aria-label": "Dismiss",
              className: "sds-dialog-body__dismiss",
              onClick: onDismiss,
              children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("svg", { viewBox: "0 0 20 20", width: 20, height: 20, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                "path",
                {
                  d: "M5 5 L15 15 M15 5 L5 15",
                  stroke: "currentColor",
                  strokeWidth: "1.75",
                  strokeLinecap: "round"
                }
              ) })
            }
          )
        ]
      }
    );
  }
);

// src/components/Icon/Icon.tsx
var import_react15 = require("react");

// src/components/Icon/data.ts
var iconPaths = {
  "activity": '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
  "airplay": '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',
  "alert-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
  "alert-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
  "alert-triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',
  "align-center": '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',
  "align-justify": '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',
  "align-left": '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',
  "align-right": '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',
  "anchor": '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',
  "aperture": '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',
  "archive": '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',
  "arrow-down-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',
  "arrow-down-left": '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',
  "arrow-down-right": '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',
  "arrow-down": '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',
  "arrow-left-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',
  "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',
  "arrow-right-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',
  "arrow-right": '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
  "arrow-up-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',
  "arrow-up-left": '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',
  "arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',
  "arrow-up": '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',
  "at-sign": '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',
  "award": '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
  "bar-chart-2": '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
  "bar-chart": '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',
  "battery-charging": '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',
  "battery": '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',
  "bell-off": '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
  "bell": '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',
  "bluetooth": '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',
  "bold": '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',
  "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
  "book": '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
  "bookmark": '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',
  "box": '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
  "briefcase": '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
  "calendar": '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
  "camera-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',
  "camera": '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',
  "cast": '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',
  "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
  "check-square": '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
  "check": '<polyline points="20 6 9 17 4 12"></polyline>',
  "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>',
  "chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>',
  "chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>',
  "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>',
  "chevrons-down": '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',
  "chevrons-left": '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',
  "chevrons-right": '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',
  "chevrons-up": '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',
  "chrome": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',
  "circle": '<circle cx="12" cy="12" r="10"></circle>',
  "clipboard": '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
  "clock": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
  "cloud-drizzle": '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
  "cloud-lightning": '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',
  "cloud-off": '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
  "cloud-rain": '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
  "cloud-snow": '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',
  "cloud": '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
  "code": '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
  "codepen": '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',
  "codesandbox": '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
  "coffee": '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
  "columns": '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',
  "command": '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',
  "compass": '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
  "copy": '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
  "corner-down-left": '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',
  "corner-down-right": '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',
  "corner-left-down": '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',
  "corner-left-up": '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',
  "corner-right-down": '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',
  "corner-right-up": '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',
  "corner-up-left": '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',
  "corner-up-right": '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',
  "cpu": '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
  "credit-card": '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',
  "crop": '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',
  "crosshair": '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',
  "database": '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
  "delete": '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',
  "disc": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',
  "divide-circle": '<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>',
  "divide-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>',
  "divide": '<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>',
  "dollar-sign": '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
  "download-cloud": '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',
  "download": '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
  "dribbble": '<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>',
  "droplet": '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',
  "edit-2": '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',
  "edit-3": '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',
  "edit": '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',
  "external-link": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
  "eye-off": '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
  "eye": '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
  "facebook": '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
  "fast-forward": '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',
  "feather": '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',
  "figma": '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',
  "file-minus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',
  "file-plus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',
  "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
  "file": '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',
  "film": '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',
  "filter": '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
  "flag": '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',
  "folder-minus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',
  "folder-plus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',
  "folder": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
  "framer": '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',
  "frown": '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
  "gift": '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',
  "git-branch": '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
  "git-commit": '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',
  "git-merge": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',
  "git-pull-request": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
  "github": '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
  "gitlab": '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',
  "globe": '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
  "grid": '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',
  "hard-drive": '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',
  "hash": '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',
  "headphones": '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',
  "heart": '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
  "help-circle": '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',
  "hexagon": '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',
  "home": '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
  "image": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',
  "inbox": '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',
  "info": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',
  "instagram": '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',
  "italic": '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',
  "key": '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',
  "layers": '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
  "layout": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
  "life-buoy": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',
  "link-2": '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',
  "link": '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
  "linkedin": '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
  "list": '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',
  "loader": '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',
  "lock": '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
  "log-in": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',
  "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',
  "mail": '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
  "map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
  "map": '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
  "maximize-2": '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
  "maximize": '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',
  "meh": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
  "menu": '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
  "message-circle": '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
  "message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
  "mic-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
  "mic": '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
  "minimize-2": '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
  "minimize": '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',
  "minus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',
  "minus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',
  "minus": '<line x1="5" y1="12" x2="19" y2="12"></line>',
  "monitor": '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
  "moon": '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
  "more-horizontal": '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
  "more-vertical": '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',
  "mouse-pointer": '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',
  "move": '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',
  "music": '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',
  "navigation-2": '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',
  "navigation": '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',
  "octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',
  "package": '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
  "paperclip": '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',
  "pause-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',
  "pause": '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',
  "pen-tool": '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',
  "percent": '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',
  "phone-call": '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
  "phone-forwarded": '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
  "phone-incoming": '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
  "phone-missed": '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
  "phone-off": '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',
  "phone-outgoing": '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
  "phone": '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
  "pie-chart": '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',
  "play-circle": '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',
  "play": '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
  "plus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
  "plus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
  "plus": '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',
  "pocket": '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',
  "power": '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
  "printer": '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',
  "radio": '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',
  "refresh-ccw": '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',
  "refresh-cw": '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
  "repeat": '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',
  "rewind": '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',
  "rotate-ccw": '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',
  "rotate-cw": '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
  "rss": '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',
  "save": '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',
  "scissors": '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',
  "search": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
  "send": '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
  "server": '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',
  "settings": '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
  "share-2": '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',
  "share": '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',
  "shield-off": '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
  "shield": '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
  "shopping-bag": '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',
  "shopping-cart": '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
  "shuffle": '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',
  "sidebar": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',
  "skip-back": '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',
  "skip-forward": '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',
  "slack": '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',
  "slash": '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',
  "sliders": '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',
  "smartphone": '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
  "smile": '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
  "speaker": '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',
  "square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',
  "star": '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
  "stop-circle": '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',
  "sun": '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
  "sunrise": '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',
  "sunset": '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',
  "table": '<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>',
  "tablet": '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
  "tag": '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',
  "target": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
  "terminal": '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
  "thermometer": '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
  "thumbs-down": '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',
  "thumbs-up": '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',
  "toggle-left": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',
  "toggle-right": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',
  "tool": '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
  "trash-2": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',
  "trash": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
  "trello": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',
  "trending-down": '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',
  "trending-up": '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
  "triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',
  "truck": '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
  "tv": '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',
  "twitch": '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',
  "twitter": '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
  "type": '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',
  "umbrella": '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',
  "underline": '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',
  "unlock": '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
  "upload-cloud": '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',
  "upload": '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',
  "user-check": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',
  "user-minus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',
  "user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',
  "user-x": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',
  "user": '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
  "users": '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
  "video-off": '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
  "video": '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',
  "voicemail": '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',
  "volume-1": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
  "volume-2": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
  "volume-x": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',
  "volume": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',
  "watch": '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',
  "wifi-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
  "wifi": '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
  "wind": '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',
  "x-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
  "x-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
  "x-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',
  "x": '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
  "youtube": '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',
  "zap-off": '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',
  "zap": '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
  "zoom-in": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
  "zoom-out": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>'
};

// src/components/Icon/Icon.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
var Icon = (0, import_react15.forwardRef)(function Icon2({
  name,
  size = 24,
  strokeWidth = 2,
  className,
  "aria-label": ariaLabel,
  role,
  ...rest
}, ref) {
  const inner = iconPaths[name];
  if (inner == null) {
    return null;
  }
  const isDecorative = ariaLabel == null;
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: size,
      height: size,
      fill: "none",
      stroke: "currentColor",
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      role: role ?? (isDecorative ? void 0 : "img"),
      "aria-label": ariaLabel,
      "aria-hidden": isDecorative ? true : void 0,
      "data-icon": name,
      className: ["sds-icon", className].filter(Boolean).join(" "),
      dangerouslySetInnerHTML: { __html: inner },
      ...rest
    }
  );
});

// src/components/Menu/Menu.tsx
var import_react16 = require("react");
var import_jsx_runtime17 = require("react/jsx-runtime");
var Menu = (0, import_react16.forwardRef)(function Menu2({ className, children, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    "div",
    {
      ref,
      role: "menu",
      className: ["sds-menu", className].filter(Boolean).join(" "),
      ...rest,
      children
    }
  );
});
var MenuHeader = (0, import_react16.forwardRef)(function MenuHeader2({ title, subtitle, className, children, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    "div",
    {
      ref,
      className: ["sds-menu__header", className].filter(Boolean).join(" "),
      ...rest,
      children: children ?? /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
        title != null && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "sds-menu__header-title", children: title }),
        subtitle != null && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "sds-menu__header-subtitle", children: subtitle })
      ] })
    }
  );
});
var MenuHeading = (0, import_react16.forwardRef)(function MenuHeading2({ className, children, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    "div",
    {
      ref,
      className: ["sds-menu__heading", className].filter(Boolean).join(" "),
      ...rest,
      children
    }
  );
});
var MenuSeparator = (0, import_react16.forwardRef)(function MenuSeparator2({ className, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    "hr",
    {
      ref,
      className: ["sds-menu__separator", className].filter(Boolean).join(" "),
      ...rest
    }
  );
});
var MenuShortcut = (0, import_react16.forwardRef)(function MenuShortcut2({ className, children, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    "span",
    {
      ref,
      className: ["sds-menu__shortcut", className].filter(Boolean).join(" "),
      ...rest,
      children
    }
  );
});

// src/components/MenuItem/MenuItem.tsx
var import_react17 = require("react");
var import_jsx_runtime18 = require("react/jsx-runtime");
var MenuItem = (0, import_react17.forwardRef)(function MenuItem2({ icon, description, shortcut, type = "button", className, children, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
    "button",
    {
      ref,
      type,
      role: "menuitem",
      className: ["sds-menu-item", className].filter(Boolean).join(" "),
      ...rest,
      children: [
        icon != null && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "sds-menu-item__icon", children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { className: "sds-menu-item__body", children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { className: "sds-menu-item__row", children: [
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "sds-menu-item__label", children }),
            shortcut != null && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "sds-menu-item__shortcut", children: shortcut })
          ] }),
          description != null && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "sds-menu-item__description", children: description })
        ] })
      ]
    }
  );
});

// src/components/NavigationButton/NavigationButton.tsx
var import_react18 = require("react");
var import_jsx_runtime19 = require("react/jsx-runtime");
var NavigationButton = (0, import_react18.forwardRef)(
  function NavigationButton2({
    active = false,
    direction = "column",
    size = "sm",
    icon,
    type = "button",
    className,
    children,
    ...rest
  }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
      "button",
      {
        ref,
        type,
        "aria-current": active ? "page" : void 0,
        "data-active": active,
        "data-direction": direction,
        "data-size": size,
        className: ["sds-nav-button", className].filter(Boolean).join(" "),
        ...rest,
        children: [
          icon != null && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "sds-nav-button__icon", children: icon }),
          children != null && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "sds-nav-button__label", children })
        ]
      }
    );
  }
);

// src/components/NavigationButtonList/NavigationButtonList.tsx
var import_react19 = require("react");
var import_jsx_runtime20 = require("react/jsx-runtime");
var NavigationButtonList = (0, import_react19.forwardRef)(
  function NavigationButtonList2({ direction = "row", className, children, ...rest }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      "nav",
      {
        ref,
        "data-direction": direction,
        className: ["sds-nav-button-list", className].filter(Boolean).join(" "),
        ...rest,
        children
      }
    );
  }
);
var NavigationPillList = (0, import_react19.forwardRef)(
  function NavigationPillList2({ direction = "row", className, children, ...rest }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      "nav",
      {
        ref,
        "data-direction": direction,
        className: ["sds-nav-pill-list", className].filter(Boolean).join(" "),
        ...rest,
        children
      }
    );
  }
);

// src/components/NavigationPill/NavigationPill.tsx
var import_react20 = require("react");
var import_jsx_runtime21 = require("react/jsx-runtime");
var NavigationPill = (0, import_react20.forwardRef)(
  function NavigationPill2({ active = false, type = "button", className, children, ...rest }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      "button",
      {
        ref,
        type,
        "aria-current": active ? "page" : void 0,
        "data-active": active,
        className: ["sds-nav-pill", className].filter(Boolean).join(" "),
        ...rest,
        children
      }
    );
  }
);

// src/components/Notification/Notification.tsx
var import_react21 = require("react");
var import_jsx_runtime22 = require("react/jsx-runtime");
var Notification = (0, import_react21.forwardRef)(
  function Notification2({
    variant = "message",
    title,
    body,
    icon,
    action,
    dismissible = false,
    onDismiss,
    className,
    children,
    ...rest
  }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
      "div",
      {
        ref,
        role: variant === "alert" ? "alert" : "status",
        "data-variant": variant,
        className: ["sds-notification", className].filter(Boolean).join(" "),
        ...rest,
        children: [
          icon != null && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "sds-notification__icon", children: icon }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sds-notification__stack", children: [
            children ?? /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "sds-notification__content", children: [
              title != null && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "sds-notification__title", children: title }),
              body != null && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "sds-notification__body", children: body })
            ] }),
            action != null && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "sds-notification__action", children: action })
          ] }),
          dismissible && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
            "button",
            {
              type: "button",
              "aria-label": "Dismiss",
              className: "sds-notification__dismiss",
              onClick: onDismiss,
              children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("svg", { viewBox: "0 0 20 20", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
                "path",
                {
                  d: "M5 5 L15 15 M15 5 L5 15",
                  stroke: "currentColor",
                  strokeWidth: "1.75",
                  strokeLinecap: "round"
                }
              ) })
            }
          )
        ]
      }
    );
  }
);

// src/components/Pagination/Pagination.tsx
var import_react22 = require("react");
var import_jsx_runtime23 = require("react/jsx-runtime");
var Pagination = (0, import_react22.forwardRef)(function Pagination2({ className, children, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    "nav",
    {
      ref,
      "aria-label": "Pagination",
      className: ["sds-pagination", className].filter(Boolean).join(" "),
      ...rest,
      children
    }
  );
});
var PaginationList = (0, import_react22.forwardRef)(function PaginationList2({ className, children, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    "ol",
    {
      ref,
      className: ["sds-pagination__list", className].filter(Boolean).join(" "),
      ...rest,
      children
    }
  );
});
var PaginationNext = (0, import_react22.forwardRef)(
  function PaginationNext2({ type = "button", className, children, ...rest }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
      "button",
      {
        ref,
        type,
        "aria-label": "Next page",
        className: ["sds-pagination__next", className].filter(Boolean).join(" "),
        ...rest,
        children: [
          children ?? "Next",
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("svg", { viewBox: "0 0 20 20", width: 16, height: 16, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
            "path",
            {
              d: "M8 6 L12 10 L8 14",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              fill: "none"
            }
          ) })
        ]
      }
    );
  }
);
var PaginationPrevious = (0, import_react22.forwardRef)(
  function PaginationPrevious2({ type = "button", className, children, ...rest }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
      "button",
      {
        ref,
        type,
        "aria-label": "Previous page",
        className: ["sds-pagination__prev", className].filter(Boolean).join(" "),
        ...rest,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("svg", { viewBox: "0 0 20 20", width: 16, height: 16, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
            "path",
            {
              d: "M12 6 L8 10 L12 14",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              fill: "none"
            }
          ) }),
          children ?? "Previous"
        ]
      }
    );
  }
);
var PaginationGap = (0, import_react22.forwardRef)(function PaginationGap2({ className, children, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    "span",
    {
      ref,
      "aria-hidden": "true",
      className: ["sds-pagination__gap", className].filter(Boolean).join(" "),
      ...rest,
      children: children ?? "\u2026"
    }
  );
});

// src/components/PaginationPage/PaginationPage.tsx
var import_react23 = require("react");
var import_jsx_runtime24 = require("react/jsx-runtime");
var PaginationPage = (0, import_react23.forwardRef)(
  function PaginationPage2({ current = false, type = "button", className, children, ...rest }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      "button",
      {
        ref,
        type,
        "aria-current": current ? "page" : void 0,
        "data-current": current,
        className: ["sds-pagination-page", className].filter(Boolean).join(" "),
        ...rest,
        children
      }
    );
  }
);

// src/components/PricingCard/PricingCard.tsx
var import_react24 = require("react");
var import_jsx_runtime25 = require("react/jsx-runtime");
var PricingCard = (0, import_react24.forwardRef)(function PricingCard2({
  variant = "stroke",
  device = "desktop",
  title,
  currency = "$",
  price,
  priceLabel,
  items,
  action,
  className,
  children,
  ...rest
}, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "div",
    {
      ref,
      "data-variant": variant,
      "data-device": device,
      className: ["sds-pricing-card", className].filter(Boolean).join(" "),
      ...rest,
      children: children ?? /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_jsx_runtime25.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "sds-pricing-card__top", children: [
          device === "mobile" ? /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "sds-pricing-card__title-row", children: [
            title != null && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "sds-pricing-card__title", children: title }),
            price != null && /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "sds-pricing-card__price sds-pricing-card__price--small", children: [
              currency != null && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "sds-pricing-card__currency", children: currency }),
              /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "sds-pricing-card__price-value", children: price }),
              priceLabel != null && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "sds-pricing-card__price-label", children: priceLabel })
            ] })
          ] }) : /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_jsx_runtime25.Fragment, { children: [
            title != null && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "sds-pricing-card__title", children: title }),
            price != null && /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "sds-pricing-card__price sds-pricing-card__price--large", children: [
              currency != null && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "sds-pricing-card__currency", children: currency }),
              /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "sds-pricing-card__price-value", children: price }),
              priceLabel != null && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "sds-pricing-card__price-label", children: priceLabel })
            ] })
          ] }),
          items != null && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("ul", { className: "sds-pricing-card__items", children: items })
        ] }),
        action != null && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "sds-pricing-card__action", children: action })
      ] })
    }
  );
});

// src/components/ProductInfoCard/ProductInfoCard.tsx
var import_react25 = require("react");
var import_jsx_runtime26 = require("react/jsx-runtime");
var ProductInfoCard = (0, import_react25.forwardRef)(
  function ProductInfoCard2({ image, label, price, description, className, children, ...rest }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
      "div",
      {
        ref,
        className: ["sds-product-info-card", className].filter(Boolean).join(" "),
        ...rest,
        children: [
          image != null && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "sds-product-info-card__image", children: image }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "sds-product-info-card__body", children: children ?? /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(import_jsx_runtime26.Fragment, { children: [
            label != null && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "sds-product-info-card__label", children: label }),
            price != null && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "sds-product-info-card__price", children: price }),
            description != null && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "sds-product-info-card__description", children: description })
          ] }) })
        ]
      }
    );
  }
);

// src/components/Radio/Radio.tsx
var import_react26 = require("react");
var import_jsx_runtime27 = require("react/jsx-runtime");
var Radio = (0, import_react26.forwardRef)(function Radio2({ label, description, id, disabled, className, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
    "div",
    {
      "data-disabled": disabled,
      className: ["sds-radio-field", className].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("label", { className: "sds-radio-field__row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
            "input",
            {
              ref,
              id,
              type: "radio",
              disabled,
              className: "sds-radio-field__input",
              ...rest
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "sds-radio-field__circle", "aria-hidden": "true" }),
          label != null && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "sds-radio-field__label", children: label })
        ] }),
        description != null && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "sds-radio-field__description", children: description })
      ]
    }
  );
});

// src/components/ReviewCard/ReviewCard.tsx
var import_react27 = require("react");
var import_jsx_runtime28 = require("react/jsx-runtime");
function defaultRating(count) {
  const stars = Math.max(0, Math.min(5, Math.round(count)));
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_jsx_runtime28.Fragment, { children: Array.from({ length: stars }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Icon, { name: "star", size: 20, "aria-hidden": true }, i)) });
}
var ReviewCard = (0, import_react27.forwardRef)(function ReviewCard2({ rating, title, body, avatar, name, date, className, children, ...rest }, ref) {
  const ratingNode = typeof rating === "number" ? defaultRating(rating) : rating;
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    "div",
    {
      ref,
      className: ["sds-review-card", className].filter(Boolean).join(" "),
      ...rest,
      children: children ?? /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(import_jsx_runtime28.Fragment, { children: [
        ratingNode != null && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "sds-review-card__rating", role: "img", "aria-label": "rating", children: ratingNode }),
        (title != null || body != null) && /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "sds-review-card__body", children: [
          title != null && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "sds-review-card__title", children: title }),
          body != null && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "sds-review-card__text", children: body })
        ] }),
        (avatar != null || name != null || date != null) && /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "sds-review-card__author", children: [
          avatar != null && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "sds-review-card__avatar", children: avatar }),
          (name != null || date != null) && /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("span", { className: "sds-review-card__info", children: [
            name != null && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "sds-review-card__name", children: name }),
            date != null && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "sds-review-card__date", children: date })
          ] })
        ] })
      ] })
    }
  );
});

// src/components/StatsCard/StatsCard.tsx
var import_react28 = require("react");
var import_jsx_runtime29 = require("react/jsx-runtime");
var StatsCard = (0, import_react28.forwardRef)(function StatsCard2({ icon, value, label, className, children, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
    "div",
    {
      ref,
      className: ["sds-stats-card", className].filter(Boolean).join(" "),
      ...rest,
      children: [
        icon != null && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "sds-stats-card__icon", children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "sds-stats-card__body", children: children ?? /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(import_jsx_runtime29.Fragment, { children: [
          value != null && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "sds-stats-card__value", children: value }),
          label != null && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "sds-stats-card__label", children: label })
        ] }) })
      ]
    }
  );
});

// src/components/Search/Search.tsx
var import_react29 = require("react");
var import_jsx_runtime30 = require("react/jsx-runtime");
var Search = (0, import_react29.forwardRef)(function Search2({ label, description, error, className, id, disabled, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    FieldShell,
    {
      label,
      description,
      error,
      disabled,
      htmlFor: id,
      className,
      children: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "sds-search", children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
          "svg",
          {
            viewBox: "0 0 20 20",
            width: 20,
            height: 20,
            "aria-hidden": "true",
            className: "sds-search__icon",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
                "circle",
                {
                  cx: "9",
                  cy: "9",
                  r: "6",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  fill: "none"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
                "path",
                {
                  d: "M14 14 L17 17",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
          "input",
          {
            ref,
            id,
            type: "search",
            disabled,
            className: "sds-field__input sds-search__input",
            ...rest
          }
        )
      ] })
    }
  );
});

// src/components/Select/Select.tsx
var import_react30 = require("react");
var import_jsx_runtime31 = require("react/jsx-runtime");
var Select = (0, import_react30.forwardRef)(function Select2({ label, description, error, className, id, disabled, children, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
    FieldShell,
    {
      label,
      description,
      error,
      disabled,
      htmlFor: id,
      className,
      children: /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "sds-select", children: [
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
          "select",
          {
            ref,
            id,
            disabled,
            className: "sds-field__input sds-select__control",
            ...rest,
            children
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
          "svg",
          {
            viewBox: "0 0 20 20",
            width: 20,
            height: 20,
            "aria-hidden": "true",
            className: "sds-select__chevron",
            children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
              "path",
              {
                d: "M6 8 L10 12 L14 8",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fill: "none"
              }
            )
          }
        )
      ] })
    }
  );
});

// src/components/Slider/Slider.tsx
var import_react31 = require("react");
var import_jsx_runtime32 = require("react/jsx-runtime");
var Slider = (0, import_react31.forwardRef)(function Slider2({ label, description, error, className, id, disabled, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    FieldShell,
    {
      label,
      description,
      error,
      disabled,
      htmlFor: id,
      className,
      children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
        "input",
        {
          ref,
          id,
          type: "range",
          disabled,
          className: "sds-slider",
          ...rest
        }
      )
    }
  );
});

// src/components/Switch/Switch.tsx
var import_react32 = require("react");
var import_jsx_runtime33 = require("react/jsx-runtime");
var Switch = (0, import_react32.forwardRef)(function Switch2({ label, description, id, disabled, className, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
    "div",
    {
      "data-disabled": disabled,
      className: ["sds-switch-field", className].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("label", { className: "sds-switch-field__row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            "input",
            {
              ref,
              id,
              type: "checkbox",
              role: "switch",
              disabled,
              className: "sds-switch-field__input",
              ...rest
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "sds-switch-field__track", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "sds-switch-field__thumb" }) }),
          label != null && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "sds-switch-field__label", children: label })
        ] }),
        description != null && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { className: "sds-switch-field__description", children: description })
      ]
    }
  );
});

// src/components/Tab/Tab.tsx
var import_react33 = require("react");
var import_jsx_runtime34 = require("react/jsx-runtime");
var Tab = (0, import_react33.forwardRef)(function Tab2({ active = false, type = "button", className, children, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    "button",
    {
      ref,
      type,
      role: "tab",
      "aria-selected": active,
      "data-active": active,
      className: ["sds-tab", className].filter(Boolean).join(" "),
      ...rest,
      children
    }
  );
});

// src/components/Tabs/Tabs.tsx
var import_react34 = require("react");
var import_jsx_runtime35 = require("react/jsx-runtime");
var Tabs = (0, import_react34.forwardRef)(function Tabs2({ className, children, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    "div",
    {
      ref,
      role: "tablist",
      className: ["sds-tabs", className].filter(Boolean).join(" "),
      ...rest,
      children
    }
  );
});

// src/components/Tag/Tag.tsx
var import_react35 = require("react");
var import_jsx_runtime36 = require("react/jsx-runtime");
var Tag = (0, import_react35.forwardRef)(function Tag2({
  scheme = "brand",
  variant = "primary",
  removable = false,
  removeIcon,
  onRemove,
  className,
  children,
  ...rest
}, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
    "span",
    {
      ref,
      "data-scheme": scheme,
      "data-variant": variant,
      className: ["sds-tag", className].filter(Boolean).join(" "),
      ...rest,
      children: [
        children != null && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "sds-tag__label", children }),
        removable && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          "button",
          {
            type: "button",
            "aria-label": "Remove",
            className: "sds-tag__remove",
            onClick: onRemove,
            children: removeIcon ?? /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
              "svg",
              {
                viewBox: "0 0 16 16",
                width: 16,
                height: 16,
                "aria-hidden": "true",
                focusable: "false",
                children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
                  "path",
                  {
                    d: "M4 4 L12 12 M12 4 L4 12",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round"
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
});

// src/components/TagToggleGroup/TagToggleGroup.tsx
var import_react36 = require("react");
var import_jsx_runtime37 = require("react/jsx-runtime");
var TagToggleGroup = (0, import_react36.forwardRef)(
  function TagToggleGroup2({ className, children, ...rest }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
      "div",
      {
        ref,
        role: "group",
        className: ["sds-tag-toggle-group", className].filter(Boolean).join(" "),
        ...rest,
        children
      }
    );
  }
);

// src/components/TestimonialCard/TestimonialCard.tsx
var import_react37 = require("react");
var import_jsx_runtime38 = require("react/jsx-runtime");
var TestimonialCard = (0, import_react37.forwardRef)(
  function TestimonialCard2({ quote, avatar, name, subtitle, className, children, ...rest }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
      "div",
      {
        ref,
        className: ["sds-testimonial-card", className].filter(Boolean).join(" "),
        ...rest,
        children: children ?? /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_jsx_runtime38.Fragment, { children: [
          quote != null && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("p", { className: "sds-testimonial-card__quote", children: quote }),
          (avatar != null || name != null || subtitle != null) && /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "sds-testimonial-card__author", children: [
            avatar != null && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "sds-testimonial-card__avatar", children: avatar }),
            (name != null || subtitle != null) && /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("span", { className: "sds-testimonial-card__info", children: [
              name != null && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "sds-testimonial-card__name", children: name }),
              subtitle != null && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "sds-testimonial-card__subtitle", children: subtitle })
            ] })
          ] })
        ] })
      }
    );
  }
);

// src/components/Text/Text.tsx
var import_react38 = require("react");
var import_jsx_runtime39 = require("react/jsx-runtime");
var variantTag = {
  titleHero: "h1",
  titlePage: "h1",
  subtitle: "p",
  heading: "h2",
  subheading: "h3",
  body: "p",
  bodyStrong: "strong",
  bodyEmphasis: "em",
  bodyLink: "a",
  bodySmall: "p",
  bodyCode: "code",
  listItem: "li",
  linkListItem: "li"
};
var Text = (0, import_react38.forwardRef)(function Text2({ variant = "body", as, className, children, ...rest }, ref) {
  const Component = as ?? variantTag[variant];
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
    Component,
    {
      ref,
      "data-variant": variant,
      className: ["sds-text", className].filter(Boolean).join(" "),
      ...rest,
      children
    }
  );
});

// src/components/TextArea/TextArea.tsx
var import_react39 = require("react");
var import_jsx_runtime40 = require("react/jsx-runtime");
var TextArea = (0, import_react39.forwardRef)(function TextArea2({ label, description, error, className, id, disabled, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    FieldShell,
    {
      label,
      description,
      error,
      disabled,
      htmlFor: id,
      className,
      children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
        "textarea",
        {
          ref,
          id,
          disabled,
          className: "sds-field__input sds-textarea",
          ...rest
        }
      )
    }
  );
});

// src/components/TextField/TextField.tsx
var import_react40 = require("react");
var import_jsx_runtime41 = require("react/jsx-runtime");
var TextField = (0, import_react40.forwardRef)(function TextField2({ label, description, error, type = "text", className, id, disabled, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
    FieldShell,
    {
      label,
      description,
      error,
      disabled,
      htmlFor: id,
      className,
      children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
        "input",
        {
          ref,
          id,
          type,
          disabled,
          className: "sds-field__input",
          ...rest
        }
      )
    }
  );
});

// src/components/Tooltip/Tooltip.tsx
var import_react41 = require("react");
var import_jsx_runtime42 = require("react/jsx-runtime");
var Tooltip = (0, import_react41.forwardRef)(function Tooltip2({ placement = "top", title, body, className, children, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
    "div",
    {
      ref,
      role: "tooltip",
      "data-placement": placement,
      className: ["sds-tooltip", className].filter(Boolean).join(" "),
      ...rest,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "sds-tooltip__beak", "aria-hidden": "true" }),
        children ?? /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(import_jsx_runtime42.Fragment, { children: [
          title != null && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { className: "sds-tooltip__title", children: title }),
          body != null && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { className: "sds-tooltip__body", children: body })
        ] })
      ]
    }
  );
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  AccordionItem,
  Avatar,
  AvatarBlock,
  AvatarGroup,
  Button,
  ButtonGroup,
  Calendar,
  CalendarButton,
  Card,
  CardSlot,
  Checkbox,
  DateInput,
  DatePicker,
  DialogBody,
  Icon,
  Menu,
  MenuHeader,
  MenuHeading,
  MenuItem,
  MenuSeparator,
  MenuShortcut,
  NavigationButton,
  NavigationButtonList,
  NavigationPill,
  NavigationPillList,
  Notification,
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
  PricingCard,
  ProductInfoCard,
  Radio,
  ReviewCard,
  Search,
  Select,
  Slider,
  StatsCard,
  Switch,
  Tab,
  Tabs,
  Tag,
  TagToggleGroup,
  TestimonialCard,
  Text,
  TextArea,
  TextField,
  Tooltip
});
