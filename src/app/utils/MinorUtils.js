class MinorUtils {
  cutOffDate() {
    const now = Date.now();
    const cutoffDate = new Date(now - 1000 * 60 * 60 * 24 * 365 * 18);
    return cutoffDate;
  }
}

module.exports = new MinorUtils();
