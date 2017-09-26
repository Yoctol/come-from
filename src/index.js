function isSlack(body) {
  if (
    body.type === 'url_verification' &&
    typeof body.challenge === 'string' &&
    typeof body.token === 'string'
  ) {
    return true;
  }

  if (
    body.type === 'event_callback' &&
    body.event &&
    typeof body.event === 'object' &&
    typeof body.event.type === 'string'
  ) {
    return true;
  }

  return false;
}

module.exports = body => {
  if (isSlack(body)) {
    return 'slack';
  }
  return 'messenger';
};
