import { Router } from 'express';

import { createNewPlayer, playersGet, playerGetId, generalRanking, modifyPlayerName, playerRollDices, getBetterPlayer, getWorstPlayer, deleteGames } from '../controllers/players-mongo';

export const routerPlayers = Router();

// returns the list of all players in the system with their average success rate. [x]
routerPlayers.get('/', playersGet);

// Returns the list of plays by a player. [x]
routerPlayers.get('/:id/games', playerGetId);

// Returns the average success rate for all players. [x]
routerPlayers.get('/ranking', generalRanking);

// Returns the player with the worst success rate.
routerPlayers.get('/ranking/loser', getWorstPlayer);

// Returns the player with the highest success rate.
routerPlayers.get('/ranking/winner', getBetterPlayer);

// Create a player.
//! When I put a name, not found
routerPlayers.post('/', createNewPlayer);

// A specific player makes a roll.
routerPlayers.post('/:id/games', playerRollDices);

// Modify player name.
//! Not found
routerPlayers.put('/', modifyPlayerName);

// Removes player spins. [x]
routerPlayers.delete('/:id/games', deleteGames);