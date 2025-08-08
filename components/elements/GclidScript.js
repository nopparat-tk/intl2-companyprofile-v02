/**
 * Gets a URL parameter by name using the modern URLSearchParams API.
 * @param {string} name The name of the parameter.
 * @returns {string|null} The value of the parameter or null if not found.
 */
function getParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

/**
 * Creates a record with a value and a 90-day expiry date.
 * @param {string} value The value to store.
 * @returns {{value: string, expiryDate: number}} The record object with a timestamp for expiry.
 */
function getExpiryRecord(value) {
  const EXPIRY_DAYS = 90;
  const expiryPeriod = EXPIRY_DAYS * 24 * 60 * 60 * 1000; // 90-day expiry in milliseconds

  const expiryDate = new Date().getTime() + expiryPeriod;
  return {
    value: value,
    expiryDate: expiryDate,
  };
}

/**
 * Main function to handle the Google Click ID (gclid).
 * It captures gclid from the URL, stores it in localStorage with a 90-day expiry,
 * and populates a designated form field with the gclid value if it's valid.
 */
function addGclid() {
  const gclidParam = getParam("gclid");
  const gclsrcParam = getParam("gclsrc");
  const gclidFormFields = ["gclid_field", "foobar"]; // All possible gclid form field IDs

  // The gclid is only considered valid if it comes from a Google Ads source ("aw").
  const isGclsrcValid = !gclsrcParam || gclsrcParam.includes("aw");

  let gclidRecord = null;

  // If a new, valid gclid is in the URL, create a record and store it in localStorage.
  if (gclidParam && isGclsrcValid) {
    gclidRecord = getExpiryRecord(gclidParam);
    localStorage.setItem("gclid", JSON.stringify(gclidRecord));
  }

  // Use the new gclid record if available, otherwise try to retrieve it from storage.
  let gclidData = gclidRecord;
  if (!gclidData) {
    try {
      const storedGclid = localStorage.getItem("gclid");
      if (storedGclid) {
        gclidData = JSON.parse(storedGclid);
      }
    } catch (e) {
      console.error("Error parsing gclid from localStorage:", e);
      // If parsing fails, remove the corrupted item to prevent future errors.
      localStorage.removeItem("gclid");
    }
  }

  // Check if the retrieved gclid data is present and not expired.
  const isGclidValid = gclidData && new Date().getTime() < gclidData.expiryDate;

  if (isGclidValid) {
    // Find the first available form field from the list and populate it.
    const gclidField = gclidFormFields
      .map((id) => document.getElementById(id))
      .find((element) => element); // Find the first non-null element

    if (gclidField) {
      gclidField.value = gclidData.value;
    }
  }
}

window.addEventListener("load", addGclid);
